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
import PestañaComprobante from "./Components/pestañaComprobante";
import PrivateRouteAdmin from "./Auth/PrivateRouteAdmin";
import PrivateRouteEstudiante from "./Auth/PrivateRouteEstudiante";
import PrivateRouteHome from "./Auth/PrivateRouteHome";
import PrivateRouteRegistroAdmin from "./Auth/PrivateRouteRegistroAdmin";
import PrivateRouteRegistroEstudiante from "./Auth/PrivateRouteRegistroEstudiante";
function App() {
  return (
      <BrowserRouter>
      <Switch>
      <RestrictedRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/autenticacion" component={Autenticador} />
      <PrivateRouteHome exact path="/home" component={Home}/>
      <PrivateRouteRegistroEstudiante exact path="/registroEstudiante" component={PopupFormEstudiante} />
      <PrivateRouteHome exact path="/pestañaComprobante" component={PestañaComprobante} />
      <PrivateRouteEstudiante exact path="/comprobantes" component={Comprobantes}/>
      <PrivateRouteEstudiante exact path="/subirComprobante" component={SubirComprobante}/>
      <PrivateRouteRegistroAdmin exact path="/registroAdmin" component={PopupFormAdmin} />
      <PrivateRouteAdmin exact path="/admin" component={HomeAdmin}/>
      <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
