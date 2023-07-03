import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./home.css";

type SomeComponentProps = RouteComponentProps;
const carga: FC<SomeComponentProps> = ({ history }) => {

  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user")!)
      : localStorage.clear();

  useEffect(() => {
    setTimeout(() => {
      history.push("/"); // Reemplaza con la URL de la página a la que deseas redirigir
    }, 3000); // 3000 milisegundos (3 segundos)
  }, [user]);
  
  return (
    <>
        <div className='load'></div>
    </>
  );
};

export default carga;
