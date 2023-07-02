import React, { FC, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouteComponentProps } from "react-router";
import LogoImage from "./LogoImage";
import perfilImage from "../images/perfil.png";
import UserContext from "./UserContext";
import "./Login.css"; // Agregamos el archivo CSS personalizado
import { useAuth0 } from '@auth0/auth0-react';
type SomeComponentProps = RouteComponentProps;

const Login: FC<SomeComponentProps> = ({ history }): JSX.Element => {
  const { loginWithRedirect, isAuthenticated, isLoading} = useAuth0();
  
  const handleLogin = () => {
    // Llamar a la función de Auth0 para iniciar sesión
    loginWithRedirect();
    
  };
  



  const [est, setEst] = useState<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* const login = (data: any) => {
    console.log(data);
    let params = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8080/user/login", params)
      .then(function(response) {
        //   IF EMAIL ALREADY EXISTS
        if (response.data.success === false) {
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
        } else {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
          // 
          // // console.log(currentUser);
          localStorage.setItem("auth", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.Usuario));
          // console.log(JSON.stringify(response.data.usuario));
          setTimeout(() => {
            history.push("/");
          }, 1000);
        }
        
      })
      
      .catch(function(error) {
        console.log(error);
      });
  }; */

  return (
    <>
    <div className="grid">
      <div className="sisgeg">SISGEG</div>
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
