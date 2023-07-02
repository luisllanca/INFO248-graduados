import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import RestrictedRoute from "./Auth/RestrictedRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./Components/Home";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Comprobantes from "./Components/Comprobantes";
import SubirComprobante from "./Components/SubirComprobante";
import UserContext from "./Components/UserContext";
import carga from "./Components/carga";
import HomeAdmin from "./Components/HomeAdmin";
import PopupFormEstudiante from "./Components/PopupFormEstudiante";
import PopupFormAdmin from "./Components/PopupFormAdmin";
import Autenticador from "./Components/Autenticador";
function App() {
  return (
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/home" component={Home}/>
        {/* <PrivateRoute exact path="/carga" component={carga}/> */}
        <PrivateRoute exact path="/comprobantes" component={Comprobantes}/>
        <PrivateRoute exact path="/subirComprobante" component={SubirComprobante}/>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/admin" component={HomeAdmin}/>
        <PrivateRoute exact path="/autenticacion" component={Autenticador} />
        <PrivateRoute exact path="/registroEstudiante" component={PopupFormEstudiante} />
        <PrivateRoute exact path="/registroAdmin" component={PopupFormAdmin} />
        <Route exact path="/register" component={SignUp} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
