import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import RestrictedRoute from "./Auth/RestrictedRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./Components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Comprobantes from "./Components/Comprobantes";
import SubirComprobante from "./Components/SubirComprobante";
import UserContext from "./Components/UserContext";
import carga from "./Components/carga";
function App() {
  return (
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path="/carga" component={carga}/>
        <PrivateRoute exact path="/comprobantes" component={Comprobantes}/>
        <PrivateRoute exact path="/subirComprobante" component={SubirComprobante}/>
        <RestrictedRoute exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
