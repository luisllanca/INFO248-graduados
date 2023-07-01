import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./home.css";
import LogoImage from "./LogoImage";
import EnhancedTable from './EnhancedTable';

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
        <div className='containerTabla'><EnhancedTable/></div>
        <div className='contenedor-botones3'>
          <button type="submit" className='ingresar_button' onClick={subirComp}>Ir a Subir comprobante</button>
        </div>
      </div>
    </>
  );
};

export default Comprobantes;
