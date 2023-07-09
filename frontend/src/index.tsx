import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-lpmhwti1uwtsgfok.us.auth0.com"
      clientId="HTstXUMKgWFq1CpvYeff0dLMexjk5cSG"
      authorizationParams={{
        redirect_uri: "http://localhost:3333/autenticacion",
      }}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
