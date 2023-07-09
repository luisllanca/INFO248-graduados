import React, { useState, useEffect, FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "./home.css";
import LogoImage from "./LogoImage";

const est =
  localStorage.getItem("est") !== "undefined"
    ? JSON.parse(localStorage.getItem("est")!)
    : localStorage.clear();

type SomeComponentProps = RouteComponentProps;
const SubirComprobante: FC<SomeComponentProps> = ({ history }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      monto: 0,
      tipo: "",
    },
  });

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const home = () => {
    history.push("/");
  };

  const subirComp = (data: any) => {
    let params = {
      id: est.id,
      tipo: data.tipo,
      monto: data.monto,
      img: "xd.png",
    };

    // console.log(params);

    axios
      .post("http://146.83.216.251:8888/estudiante/subirComprobante", params)
      .then(function (response) {
        if (response.data.success === false) {
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
        } else {
          toast.success("Comprobante subido exitosamente", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
          setTimeout(() => {
            history.push("/comprobantes");
          }, 3000);
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="grid">
        <button type="submit" className="sisgeg" onClick={home}>
          SISGEG
        </button>
        <div className="eslogan">Sistema seguimiento escuela graduados</div>
        <LogoImage />
      </div>
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
        <button type="submit" className="butn" onClick={home}>
          Volver
        </button>

        <form autoComplete="off" onSubmit={handleSubmit(subirComp)}>
          <div className="mb-3 mt-4">
            <label className="form-label">Monto</label>
            <input
              type="number"
              className="form-control shadow-none"
              id="exampleFormControlInput1"
              {...register("monto", { required: true, min: 1 })}
            />
            {errors.monto && (
              <p className="text-danger" style={{ fontSize: 14 }}>
                {errors.monto.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <select {...register("tipo", { required: true })}>
              <option value="">Select...</option>
              <option value="Arancel">Arancel</option>
              <option value="Matricula">Matrícula</option>
            </select>
            {errors.tipo && (
              <p className="text-danger" style={{ fontSize: 14 }}>
                {errors.tipo.message}
              </p>
            )}
          </div>
          <div className="text-center mt-4 ">
            <button
              className="btn btn-outline-primary text-center shadow-none mb-3"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubirComprobante;
