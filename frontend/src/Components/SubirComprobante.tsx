import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/home.css";
import LogoImage from "./LogoImage";
import LogoutButton from './LogoutButton';
type SomeComponentProps = RouteComponentProps;
function getFileExtension(filename: string) {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}
const SubirComprobante: FC<SomeComponentProps> = ({ history }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64 = base64String.split(",")[1]; // Eliminar el encabezado "data:image/jpeg;base64,"
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  const [showErrors, setShowErrors] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const est =
  localStorage.getItem("est") !== "undefined"
    ? JSON.parse(localStorage.getItem("est")!)
    : localStorage.clear();

  const compActual =
  localStorage.getItem("compActual") !== "undefined"
    ? JSON.parse(localStorage.getItem("compActual")!)
    : localStorage.clear();
    
  console.log(compActual);
    
  const home = () => {
    localStorage.removeItem("compActual");
    history.push("/home");
  };

  useEffect(() => {
    if(errors.tipo || errors.monto) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
    }
    console.log(showErrors);

  }, [errors]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const subirComp = (data: any) => {
    if (file){
      let extension = getFileExtension(file.name)
      fileToBase64(file)
      .then((base64String) => {
      let params = {
          id_estudiante: est.id,
          tipo: data.tipo,
          monto: data.monto,
          img: base64String,
          extension: extension
        }
    
        // console.log(params);
        if(compActual === null) {
          // Opción de subir un comprobante
          axios
            .post("http://localhost:8080/comprobantes", params)
            .then(function (response) {
              setTimeout(() => {
                localStorage.removeItem("compActual");
                history.push("/comprobantes");
              }, 1000);
            })
      
            .catch(function (error) {
              console.log(error);
            });
        } else {
          // Opción de editar un comprobante
          axios
            .put(`http://localhost:8080/comprobantes/${compActual.id}`, params)
            .then(function (response) {
              setTimeout(() => {
                localStorage.removeItem("compActual");
                history.push("/comprobantes");
              }, 1000);
            })
      
            .catch(function (error) {
              console.log(error);
            });
        }
      })
  };
}

  return (
    <>
      <div className="grid">
        <button type="submit" className="sisgeg" onClick={home}>SISGEG</button>
        <div className="eslogan">Sistema seguimiento escuela graduados</div>
        <div className='logout-container'> <LogoutButton></LogoutButton>   </div>
        <LogoImage />
      </div>
      <div className='title'>{compActual ? "Editar comprobante" : "Subir comprobante"}</div>
      <div className='gridcomprobante'>
      <div className="file-upload">
            <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
            {file && <p>Archivo seleccionado: {file.name} </p>}
          </div>
        
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