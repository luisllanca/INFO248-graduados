import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import CustomizedTable from "../CustomizedTable"
import "./home.css";

const estudiante = localStorage.getItem("est") !== "undefined"
  ? JSON.parse(localStorage.getItem("est")!)
  : localStorage.clear();

type SomeComponentProps = RouteComponentProps;
const Comprobantes: FC<SomeComponentProps> = ({ history }) => {

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const subirComp = () => {
    history.push("/subirComprobante");
  }

  const home = () => {
    history.push("/");
  }

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
          <h1 className="m-1">Historial de comprobantes</h1>
          <button type="submit" className="butn" onClick={home}>
            Volver
          </button>
        </div>
        <div>
          <button type="submit" className="butn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="contenedor">
        {estudiante && <CustomizedTable/>}
        
        <button type="submit" className="butn" onClick={subirComp}>
            Subir comprobante
          </button>
      </div>

    </>
  );
};

export default Comprobantes;
