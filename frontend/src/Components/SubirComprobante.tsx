import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/home.css";
import LogoImage from "./LogoImage";

type SomeComponentProps = RouteComponentProps;
const SubirComprobante: FC<SomeComponentProps> = ({ history }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showErrors, setShowErrors] = useState(false);

  const est =
  localStorage.getItem("est") !== "undefined"
    ? JSON.parse(localStorage.getItem("est")!)
    : localStorage.clear();

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const home = () => {
    history.push("/");
  };

  useEffect(() => {
    if(errors.tipo || errors.monto) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
    }
    console.log(showErrors);

  }, [errors]);

  const subirComp = (data: any) => {
    let params = {
      id_estudiante: est.id,
        tipo: data.tipo,
        monto: data.monto,
        img: "xd.png"
      }
  
      // console.log(params);
  
      axios
        .post("http://localhost:8080/comprobantes", params)
        .then(function (response) {
          setTimeout(() => {
            history.push("/comprobantes");
          }, 1000);
        })
  
        .catch(function (error) {
          console.log(error);
        });
  };

  return (
    <>
      <div className="grid">
        <button type="submit" className="sisgeg" onClick={home}>SISGEG</button>
        <div className="eslogan">Sistema seguimiento escuela graduados</div>
        <div className='logout-container'><button type='submit' className='logout' onClick={logout}>Cerrar Sesion</button></div>
        <LogoImage />
      </div>
      <div className='title'>Subir comprobante</div>
      <div className='gridcomprobante'>
        <div className='draganddrop'>hola</div>
        <form autoComplete="off">
          <div className='gridmonto'>
            <div className="select">
              <input
                placeholder="Monto"
                type="number"
                className="form-control shadow-none"
                id="exampleFormControlInput1"
                {...register("monto", {
                  required: {
                    value: true,
                    message: "Ingrese un monto"
                  },
                  min: {
                    value: 1,
                    message: "El monto debe ser positivo",
                  },
                })}
              />
                <p className="text-danger" style={{ fontSize: 14 }}>
                  {showErrors && errors.monto && (errors.monto.message)}
                </p>
            </div>
            <div className="select">
              <select 
                id="select"
                {...register("tipo", {
                  required: "Ingrese el tipo",
                })}

                >
                <option value="">Seleccione...</option>
                <option value="Arancel">Arancel</option>
                <option value="Matricula">Matrícula</option>
              </select>
                <p className="text-danger" style={{ fontSize: 14 }}>
                  {showErrors && errors.tipo && (errors.tipo.message)}
                </p>
            </div>
          </div>
        </form>
        <div className="contenedor-botones2">
          <button
            className="ingresar_button"
            type="submit"
            onClick={handleSubmit(subirComp)}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default SubirComprobante;