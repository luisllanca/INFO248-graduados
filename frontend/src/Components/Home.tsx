import React, { useState, useEffect, FC, useContext } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./home.css";
import perfilImage from "../images/perfil.png";
import LogoImage from "./LogoImage";

type SomeComponentProps = RouteComponentProps;
const Home: FC<SomeComponentProps> = ({ history }) => {

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  const inicio = () => {
    history.push("/")
  };

  const histComp = () => {
    history.push("/comprobantes");
  }

  const subirComp = () => {
    history.push("/subirComprobante");
  }

  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user")!)
      : localStorage.clear();

  // console.log(user);

  const [est, setEst] = useState<any>();
  const [comps, setComps] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const responseEst = await fetch(`http://localhost:8080/estudiantes/user/${user.id}`);
      const dataEst = await responseEst.json();
      setEst(dataEst.Estudiante);
      localStorage.setItem("est", JSON.stringify(dataEst.Estudiante));
  
      if (dataEst.Estudiante) {
        const responseComps = await fetch(`http://localhost:8080/comprobantes/estudiante/${dataEst.Estudiante.id}`);
        const dataComps = await responseComps.json();
        setComps(dataComps.Comprobantes);
        console.log(dataComps.Comprobantes);
      }
    };
  
    fetchData();
  }, []);

  function getTotal(comps: any[]) {
    let total = 0;
    comps.forEach(comp => total += comp.monto);
    return `$${total}`;
  }

  function getTotalComps(comps: any[]) {
    let total = 0;
    comps.forEach(comp => total += 1);
    return `${total}`;
  }
  return (
    <>
      <div className="grid">
        <button type="submit" className="sisgeg" onClick={inicio}>SISGEG</button>
        <div className="eslogan">Sistema seguimiento escuela graduados</div>
        <div className='logout-container'><button type='submit' className='logout' onClick={logout}>Cerrar Sesion</button></div>
        <LogoImage />
      </div>
      <div className="griddatos">
        <div className="contenedor-cuadrado">
          <img src={perfilImage} alt="Foto perfil" />
        </div>
        <div className="datos">
          {user && <div>{user.nombre} {user.apellido}</div>}
          {est && <div>{est.programa} en {est.carrera}</div>}
        </div>
      </div>
      <div className="linea"></div>
      <div className="gridresumen">
        <div className="resumen">
          <div className='estadofin'>Resumen Financiero</div>
          <div className='resumen3'>
            <div className='resumen1'>Monto total abonado: </div>
            <div className='datocuadro'>{comps ? getTotal(comps) : "$0"}</div>
          </div>
          <div className='resumen3'>
            <div className='resumen1'>Total comprobantes ingresados:</div>
            <div className='datocuadro'>{comps ? getTotalComps(comps) : "0"}</div>
          </div>
        </div>
        <div className="botones">
          <div className='estadofin'>Estado Financiero</div>
          <div className='contenedor-botones'><button type="submit" className="boton" onClick={histComp}>Historial de comprobantes</button></div>
          <div className='contenedor-botones'><button type="submit" className="boton" onClick={subirComp}>Subir comprobante</button></div>
        </div>
      </div>
    </>
  );
};

export default Home;
