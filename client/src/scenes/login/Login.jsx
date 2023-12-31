import React from "react";
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";
import "./stytch.css"

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  const styles = {
    container: {
      width: "100%",
    },
    buttons: {
      primary: {
        backgroundColor: "#4A37BE",
        borderColor: "#4A37BE",
      },
    },
  };
  const config = {
    products: [Products.emailMagicLinks, Products.oauth],
    emailMagicLinksOptions: {
      loginRedirectURL: "https://e-commerce-amber-one.vercel.app",
      loginExpirationMinutes: 60,
      signupRedirectURL: "https://e-commerce-amber-one.vercel.app",
      signupExpirationMinutes: 60,
    },
    oauthOptions: {
      providers: [{ type: "google" }],
      loginRedirectURL: "https://e-commerce-amber-one.vercel.app",
      loginExpirationMinutes: 60,
      signupRedirectURL: "https://e-commerce-amber-one.vercel.app",
      signupExpirationMinutes: 60,
    },
  };

  return <div className="container"><StytchLogin config={config} styles={styles} />;</div>
};

export default Login;