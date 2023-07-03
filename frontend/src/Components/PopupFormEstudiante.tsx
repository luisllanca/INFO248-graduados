import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "./styles/popup.css"; // Importa los estilos CSS

const PopupFormEstudiante = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [showErrors, setShowErrors] = useState(false);
  const correo = localStorage.getItem("correo")
  const rol = localStorage.getItem("rol")

  useEffect(() => {
    if(errors.nombre || errors.apellido || errors.rut || errors.programa || errors.carrera) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
    }
    console.log(errors);

  }, [errors]);

  async function crearUsuarioEstudiante(data : any) {
    
    try {
      const requestBody = {
        nombre: data.nombre,
        apellido: data.apellido,
        rol:rol,
        email: correo,
        rut: data.rut,
        programa: data.programa,
        carrera: data.carrera
      };
  
      await axios.post('http://localhost:8080/user/registrar/estudiante', requestBody)
      .then(response => {
        
        const user = response.data.Usuario; // Reemplaza 'campo' con el nombre del campo que deseas extraer
        const msg = response.data.msg
        // Utiliza el campo específico
        // Guardar el id del usuario en localstorage
        
        const userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);
        console.log(msg)
      })
      .catch(error => {
        console.log(error)
        // Manejo de errores
      });

      
    } 
    catch (error) {
      console.error(error);
    }
  }

  const registrar = (data : any) =>  {
    // Envío de datos a la API local.
    console.log(`Datos enviados: ${data.nombre} ${data.apellido} ${data.rut} ${data.programa} ${data.carrera} ${correo}`);
    
    
    crearUsuarioEstudiante(data);
    setTimeout(() => {
      history.push("/home");
    }, 1000);

  };

  return (
    <div className="popup-container">
      <div className="popup-content">
      <div className="tituloFormulario">Formulario Estudiantes</div>
        <form autoComplete="off">
          <div className="campo">
            <label>Nombre:</label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Ingrese un nombre"
                }
              })}
            />
            <p className="text-danger" style={{ fontSize: 14 }}>
              {showErrors && errors.nombre && (errors.nombre.message)}
            </p>
          </div>
          <div className="campo">
            <label>Apellido:</label>
            <input
              type="text"
              id="apellido"
              placeholder="Apellido"
              {...register("apellido", {
                required: {
                  value: true,
                  message: "Ingrese un apellido"
                }
              })}
            />
            <p className="text-danger" style={{ fontSize: 14 }}>
              {showErrors && errors.apellido && (errors.apellido.message)}
            </p>
          </div>
          <div className="campo">
            <label>RUT:</label>
            <input
              type="text"
              id="rut"
              placeholder="12345678-9"
              {...register("rut", {
                required: {
                  value: true,
                  message: "Ingrese su rut"
                }
              })}
            />
            <p className="text-danger" style={{ fontSize: 14 }}>
              {showErrors && errors.rut && (errors.rut.message)}
            </p>
          </div>
          <div className="campo">
            <label>Programa:</label>
            <input
              type="text"
              id="programa"
              placeholder="Programa"
              {...register("programa", {
                required: {
                  value: true,
                  message: "Ingrese su programa"
                }
              })}
            />
            <p className="text-danger" style={{ fontSize: 14 }}>
              {showErrors && errors.programa && (errors.programa.message)}
            </p>
          </div>
          <div className="campo">
            <label>Carrera:</label>
            <input
              type="text"
              id="carrera"
              placeholder="Carrera"
              {...register("carrera", {
                required: {
                  value: true,
                  message: "Ingrese su carrera"
                }
              })}
            />
            <p className="text-danger" style={{ fontSize: 14 }}>
              {showErrors && errors.carrera && (errors.carrera.message)}
            </p>
          </div>
          <button type="submit" className= "ingresar_button" onClick={handleSubmit(registrar)}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupFormEstudiante;