import React, { useState, useEffect, FC, useContext } from 'react'
import { RouteComponentProps } from "react-router-dom";
import CustomizedTable from "./CustomizedTable"
import "./home.css";
import perfilImage from "../images/perfil.png";
import LogoImage from "./LogoImage";
import UserContext from './UserContext';

// const user =
//   localStorage.getItem("user") !== "undefined"
//     ? JSON.parse(localStorage.getItem("user")!)
//     : localStorage.clear();

const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;

type SomeComponentProps = RouteComponentProps;
const carga: FC<SomeComponentProps> = ({ history }) => {
    const [est, setEst] = useState<any>();
    useEffect(() => {
        setTimeout(() => {
          history.push("/"); // Reemplaza con la URL de la página a la que deseas redirigir
        }, 3000); // 3000 milisegundos (3 segundos)
      }, []);
  return (
    <>
        <div className='load'></div>
    </>
  );
};

export default carga;
