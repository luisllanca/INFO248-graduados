import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Components/Login";
import RestrictedRoute from "./Auth/RestrictedRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./Components/Home";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Comprobantes from "./Components/Comprobantes";
import SubirComprobante from "./Components/SubirComprobante";
import HomeAdmin from "./Components/HomeAdmin";
import PopupFormEstudiante from "./Components/PopupFormEstudiante";
import PopupFormAdmin from "./Components/PopupFormAdmin";
import Autenticador from "./Components/Autenticador";

function App() {
  return (
      <BrowserRouter>
      <Switch>
      <PrivateRoute exact path="/home" component={Home}/>
      <PrivateRoute exact path="/comprobantes" component={Comprobantes}/>
      <PrivateRoute exact path="/subirComprobante" component={SubirComprobante}/>
      <RestrictedRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/autenticacion" component={Autenticador} />
      <PrivateRoute exact path="/admin" component={HomeAdmin}/>
      <PrivateRoute exact path="/registroEstudiante" component={PopupFormEstudiante} />
      <PrivateRoute exact path="/registroAdmin" component={PopupFormAdmin} />
      <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
