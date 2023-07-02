import React, { useState } from "react";
import "./styles/popup.css"; // Importa los estilos CSS
import { useHistory } from 'react-router-dom';
import axios from "axios";

const PopupFormAdmin  = () => {
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const history = useHistory();
  // Recuperar correo y rol
  const rol = localStorage.getItem("rol")
  const correo = localStorage.getItem("correo")
  
  async function crearUsuarioAdmin() {
    try {
      const requestBody = {
        nombre: nombre,
        apellido: apellido,
        rol: rol,
        email: correo
      };
  
      await axios.post('http://localhost:8080/user/registrar', requestBody)
      .then(response => {
        
        const id_res = response.data.id; // Reemplaza 'campo' con el nombre del campo que deseas extraer
        // Utiliza el campo específico
        // Guardar el id del usuario en localstorage
        
        const user = {
          nombre: nombre,
          apellido: apellido,
          email: correo,
          id: id_res
        };
        
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
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario
    console.log("Datos enviados:", { nombre, apellido});

    crearUsuarioAdmin();
    history.push('/admin'); 
    // Luego de enviar los datos, puedes cerrar el popup o realizar otras acciones necesarias
    // Puedes restablecer los valores del formulario a su estado inicial
  
    setNombre("");
    setApellido("");

  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Formulario administrativo</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupFormAdmin;
