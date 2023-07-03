import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./styles/home.css";
import LogoImage from "./LogoImage";
import EnhancedTable from './EnhancedTable';
import LogoutButton from './LogoutButton';
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
  const obtenerComprobante = () => {
    
    window.open('http://localhost:3000/pestañaComprobante', '_blank');
  };
  return (
    <>
      <div className="grid">
        <button type="submit" className="sisgeg" onClick={home}>SISGEG</button>
        <div className="eslogan">Sistema seguimiento escuela graduados</div>
        <div className='logout-container'> <LogoutButton></LogoutButton>   </div>
        <LogoImage />
      </div>
      <div className='title'>Historial de comprobantes</div>
      <div className='gridtablacomprobantes'>
        <div className='containerTabla'><EnhancedTable/></div>
        <div className='contenedor-botones3'>
          <button type="submit" className='ingresar_button' onClick={subirComp}>Ir a Subir comprobante</button>
          <button className="obtener-comprobante-button" onClick={obtenerComprobante}>
        Ver Comprobantes
      </button>
        </div>
      </div>
    </>
  );
};

export default Comprobantes;
