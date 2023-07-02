import React, { useState, useEffect, FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import CustomizedTable from "../CustomizedTable"
import "./home.css";
import perfilImage from "../images/perfil.png";

const user =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user")!)
    : localStorage.clear();

type SomeComponentProps = RouteComponentProps;
const Home: FC<SomeComponentProps> = ({ history }) => {

  const logout = () => {
    localStorage.clear();
    history.push("/login");
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
          <h3 className="m-3">Inicio</h3>
        </div>
        <div>
          <button type="submit" className="butn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="contenedor">
        <div className="perfil">
          <div className="img_perfil">
            <img src={perfilImage} alt="Foto de perfil" width="162" height="162" />
          </div>

          <div className="datos_perfil">
            <p>{user.nombre} {user.apellido}</p>
            {est && <p>{est.programa} en {est.carrera}</p>}
          </div>
        </div>

        <div className="datos_financieros">
          <button type="submit" className="butn" onClick={histComp}>
            Historial de comprobantes
          </button>
          <button type="submit" className="butn" onClick={subirComp}>
            Subir comprobante
          </button>
        </div>

      </div>
    </>
  );
};

export default Home;
