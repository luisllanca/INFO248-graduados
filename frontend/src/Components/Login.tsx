import React, { FC, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { RouteComponentProps } from "react-router";
import LogoImage from "./LogoImage";
import perfilImage from "../images/perfil.png";
import "./styles/Login.css";
import { useAuth0 } from '@auth0/auth0-react';

type SomeComponentProps = RouteComponentProps;

const Login: FC<SomeComponentProps> = ({ history }): JSX.Element => {
  const { loginWithRedirect, isAuthenticated, isLoading} = useAuth0();

  const inicio = () => {
    history.push("/login")
  };

  console.log(localStorage);

  return (
    <>
    <div className="grid">
      <button type="submit" className="sisgeg" onClick={inicio}>SISGEG</button>
      <div className="eslogan">Sistema seguimiento escuela graduados</div>
      <LogoImage />
    </div>
    <div className="login">
      <div className="iniciosesion">Iniciar Sesión</div>
      <div className="logo_img">
        <div className="contenedor-circulo">
          <img src={perfilImage} alt="Foto de perfil" width="162" height="162" />
        </div>
      </div>
      
      <div className="text-center mt-4">
        <div className="contenedor-botones">
          <button
            className="ingresar_button"
            type="submit"
            onClick={() => loginWithRedirect()}
          >
            Ingresar
          </button>
        </div>
      </div>      
    </div>
    </>
  );
};

export default Login;