import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./home.css";
import perfilImage from "../images/perfil.png";

const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user")!)
      : localStorage.clear();

type SomeComponentProps = RouteComponentProps;
const SubirComprobante: FC<SomeComponentProps> = ({ history }) => {

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div>
          <h1 className="m-3">Subir Comprobante</h1>
        </div>
        <div>
          <button type="submit" className="butn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="contenedor">

      </div>
    </>
  );
};

export default SubirComprobante;
