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

// const estString = localStorage.getItem("est");
// const est = estString ? JSON.parse(estString) : null;


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
    history.push("/Comprobantes");
  }

  const subirComp = () => {
    history.push("/subirComprobante");
  }
  const [est, setEst] = useState<any>();

  useEffect(() => {
    const fetchEstData = async () => {
      const data = await fetch(`http://localhost:8080/estudiante/${user.id}`)
        .then((res) => res.json());
      setEst(data.Estudiante);
      localStorage.setItem("est", JSON.stringify(data.Estudiante));
    }

    fetchEstData();

  }, [])

  const comps =
    localStorage.getItem("comps") !== "undefined"
      ? JSON.parse(localStorage.getItem("comps")!)
      : localStorage.clear();

  if (comps) {
    console.log(comps);
  }
  if (!localStorage.getItem("est")){
      location.reload();
  }

  // function getTotal(comps: any[]) {
  //   let total = 0;
  //   comps.forEach(comp => total += comp.monto);
  //   return `$${total}`;
  // }

  // function getTotalcomps(comps: any[]) {
  //   let total = 0;
  //   comps.forEach(comp => total += 1);
  //   return `${total}`;
  // }
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
          <div>{user.nombre} {user.apellido}</div>
          {est && <div>{est.programa} en {est.carrera}</div>}
        </div>
      </div>
      <div className="linea"></div>
      <div className="gridresumen">
        <div className="resumen">
          <div className='estadofin'>Resumen Financiero</div>
          <div className='resumen3'>
            <div className='resumen1'>Monto total abonado: </div>
            <div className='datocuadro'>xd</div>
          </div>
          <div className='resumen3'>
            <div className='resumen1'>Total comprobantes ingresados:</div>
            <div className='datocuadro'>xd</div>
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
