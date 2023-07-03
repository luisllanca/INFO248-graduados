import React, { useEffect, useState } from "react";
import "./styles/popup.css"; // Importa los estilos CSS
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import "./styles/home.css";


const PopupFormAdmin  = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [showErrors, setShowErrors] = useState(false);
  const history = useHistory();
  // Recuperar correo y rol
  const rol = localStorage.getItem("rol")
  const correo = localStorage.getItem("correo")

  useEffect(() => {
    if(errors.nombre || errors.apellido || errors.cargo) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
    }

  }, [errors]);
  
  async function crearUsuarioAdmin(data : any) {
    try {
      const requestBody = {
        nombre: data.nombre,
        apellido: data.apellido,
        rol:rol,
        email: correo,
        cargo: data.cargo,
      };
  
      await axios.post('http://localhost:8080/user/registrar/admin', requestBody)
      .then(response => {
        const user = response.data.Usuario; // Reemplaza 'campo' con el nombre del campo que deseas extraer
        // Utiliza el campo específico
        // Guardar el id del usuario en localstorage
        
        const userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);

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
  
  const registrar = (data: any) => {
    // Aquí puedes realizar la lógica para enviar los datos del formulario
    console.log(`Datos enviados: ${data.nombre} ${data.apellido} ${data.cargo}`);

    crearUsuarioAdmin(data);
    setTimeout(() => {
      history.push("/home");
    }, 1000);
    // Luego de enviar los datos, puedes cerrar el popup o realizar otras acciones necesarias
    // Puedes restablecer los valores del formulario a su estado inicial
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="tituloFormulario">Formulario Administrativo</div>
        <form autoComplete="off">
          <div className="campo">
            <label>Nombre: </label>
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
            <label>Cargo:</label>
            <select 
            id="cargo"
            {...register("cargo", {
              required: "Ingrese un cargo",
            })}
            >
              <option value="">Seleccione...</option>
              <option value="Secretaria">Secretaria</option>
              <option value="Director de programa">Director de programa</option>
            </select>
            <p className="text-danger" style={{ fontSize: 14 }}>
              {showErrors && errors.cargo && (errors.cargo.message)}
            </p>
          </div>
          <button type="submit" className= "ingresar_button" onClick={handleSubmit(registrar)}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupFormAdmin;