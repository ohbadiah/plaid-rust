//! Data structures and methods that interact with Plaid via HTTP.


use std::str;

use api::user::User;
use api::product::*;
use api::error::Error;
use api::mfa;

use http::{Request, StatusCode};
use http::header;

use hyper as h;
use hyper::rt::{Future};

use serde_json;

pub use self::payload::Payload;
pub mod payload;

pub use self::response::Response;
pub mod response;

/// # Client
///
/// Represents a Plaid API consumer. Encapsulates the `endpoint`,
/// `client_id` and `secret` of the consumer.
///
/// This is where all requests to the API start.
#[derive(Copy, Clone)]
pub struct Client<'a> {
    /// E.g `https://api.plaid.com`.
    pub endpoint: &'a str,
    /// Your application's `client_id`.
    pub client_id: &'a str,
    /// Your application's `secret`.
    pub secret: &'a str,
    /// The instance of `hyper::Client` to use.
    /// *In most cases* you simply need `hyper::Client::new()`.
    /// However this is a good place to configure things like
    /// proxies, timeouts etc.
    pub hyper: &'a h::Client<h::client::HttpConnector, h::Body>
}

impl<'a> Client<'a> {

    /// Make a request to the given [Product](../product/struct.Product.html), using a
    /// [Payload](./payload/struct.Payload.html) describing the intention of the operation.
    pub fn request<P: Product<'a>>(&self, product: P, payload: Payload) -> Result<Response<P>, Error> {

        let endpoint = payload.endpoint(&self, product);
        let method = payload.method();

        self.hyper
            .request(Request::builder()
                     .uri(endpoint.as_ref() as &str)
                     .method(method)
                     .header(header::CONTENT_TYPE,
                             "application/json")
                     .header(header::ACCEPT,
                             "application/json;charset=utf8")
                     .body(serde_json::to_vec(&payload))?)
            .map(|res| {
                let mut buffer = String::new();
                match (res.status(), payload) {
                    // A `201` indicates that the `User` has been created but
                    // is missing the multi-factor authentication step.
                    (StatusCode::CREATED, Payload::Authenticate( .. )) |
                    (StatusCode::CREATED, Payload::Reauthenticate( .. )) => {
                        let (_, body) = res.into_parts();
                        let user: User = try!(serde_json::from_slice(body));
                        let mfa_challenge: mfa::Challenge = try!(serde_json::from_slice(body));
                        Ok(Response::MFA(user, mfa_challenge))
                    },
                    // A `200` response for authentication is accompanied with the
                    // endpoint data that was requested for.
                    (StatusCode::OK, Payload::Authenticate( .. )) |
                    (StatusCode::OK, Payload::StepMFA( .. )) => {
                        let (_, body) = res.into_parts();
                        let user: User = try!(serde_json::from_slice(body));
                        let data: P::Data = try!(serde_json::from_slice(body));
                        Ok(Response::Authenticated(user, data))
                    },
                    // A `200` response for data requests
                    (StatusCode::OK, Payload::FetchData( .. )) => {
                        let (_, body) = res.into_parts();
                        let data: P::Data = try!(serde_json::from_slice(body));
                        Ok(Response::ProductData(data))
                    },
                    // By default, we assume a bad response
                    (ref s, _) => return Err(Error::UnsuccessfulResponse(*s))
                }
            })
            .map_err(|err| {
                Error::HTTP(err)
            })
            .wait()?
    }

}
