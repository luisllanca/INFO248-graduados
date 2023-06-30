import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import CustomizedTable from "./CustomizedTable"
import "./home.css";
import LogoImage from "./LogoImage";

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
      <div className="grid">
        <button type="submit" className="sisgeg" onClick={home}>SISGEG</button>
        <div className="eslogan">Sistema seguimiento escuela graduados</div>
        <div className='logout-container'><button type='submit' className='logout' onClick={logout}>Cerrar Sesion</button></div>
        <LogoImage />
      </div>
      <div className='title'>Historial de comprobantes</div>
      <div className='gridtablacomprobantes'>
        <div className='containerTabla'>{estudiante && <CustomizedTable/>}</div>
        <div className='contenedor-botones3'>
          <button type="submit" className='ingresar_button' onClick={subirComp}>Ir a Subir comprobante</button>
        </div>
      </div>
    </>
  );
};

export default Comprobantes;
