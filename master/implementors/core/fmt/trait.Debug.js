(function() {var implementors = {};
implementors['plaid'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/user/struct.User.html' title='plaid::api::user::User'>User</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/client/payload/enum.SelectedDevice.html' title='plaid::api::client::payload::SelectedDevice'>SelectedDevice</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/client/payload/struct.AuthenticateOptions.html' title='plaid::api::client::payload::AuthenticateOptions'>AuthenticateOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/client/payload/struct.FetchDataOptions.html' title='plaid::api::client::payload::FetchDataOptions'>FetchDataOptions</a>","impl&lt;P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> + <a class='trait' href='plaid/api/product/trait.Product.html' title='plaid::api::product::Product'>Product</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/client/response/enum.Response.html' title='plaid::api::client::response::Response'>Response</a>&lt;P&gt; <span class='where'>where P::Data: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/error/enum.Error.html' title='plaid::api::error::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/connect/struct.Connect.html' title='plaid::api::product::connect::Connect'>Connect</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/connect/struct.ConnectData.html' title='plaid::api::product::connect::ConnectData'>ConnectData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/auth/struct.Auth.html' title='plaid::api::product::auth::Auth'>Auth</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/auth/struct.AuthData.html' title='plaid::api::product::auth::AuthData'>AuthData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/info/struct.Info.html' title='plaid::api::product::info::Info'>Info</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/info/struct.InfoData.html' title='plaid::api::product::info::InfoData'>InfoData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/info/struct.InfoInternalData.html' title='plaid::api::product::info::InfoInternalData'>InfoInternalData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/info/struct.InfoAddress.html' title='plaid::api::product::info::InfoAddress'>InfoAddress</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/balance/struct.Balance.html' title='plaid::api::product::balance::Balance'>Balance</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/balance/struct.BalanceData.html' title='plaid::api::product::balance::BalanceData'>BalanceData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/income/struct.Income.html' title='plaid::api::product::income::Income'>Income</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/income/struct.IncomeData.html' title='plaid::api::product::income::IncomeData'>IncomeData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/income/struct.IncomeInternalData.html' title='plaid::api::product::income::IncomeInternalData'>IncomeInternalData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/product/income/struct.IncomeStream.html' title='plaid::api::product::income::IncomeStream'>IncomeStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/mfa/enum.Challenge.html' title='plaid::api::mfa::Challenge'>Challenge</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/mfa/enum.Response.html' title='plaid::api::mfa::Response'>Response</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/mfa/enum.Device.html' title='plaid::api::mfa::Device'>Device</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/account/struct.Account.html' title='plaid::api::data::account::Account'>Account</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/account/struct.Meta.html' title='plaid::api::data::account::Meta'>Meta</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/transaction/struct.Transaction.html' title='plaid::api::data::transaction::Transaction'>Transaction</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/transaction/struct.Meta.html' title='plaid::api::data::transaction::Meta'>Meta</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='plaid/api/data/transaction/enum.Context.html' title='plaid::api::data::transaction::Context'>Context</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/address/struct.Address.html' title='plaid::api::data::address::Address'>Address</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/phone_number/struct.PhoneNumber.html' title='plaid::api::data::phone_number::PhoneNumber'>PhoneNumber</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='plaid/api/data/email/struct.Email.html' title='plaid::api::data::email::Email'>Email</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
