import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./popup.css"; // Importa los estilos CSS

interface PopupFormEstudianteProps {
  correo: string;
  rol: string;
  
}

const PopupFormEstudiante: React.FC<PopupFormEstudianteProps> = (props) => {
  const { correo, rol } = props;
  console.log(correo)
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [programa, setPrograma] = useState("");
  const [carrera, setCarrera] = useState("");

  const history = useHistory();

  async function crearUsuarioEstudiante() {
    
    try {
      const requestBody = {
        nombre: nombre,
        apellido: apellido,
        password: "xd jano ql te dije que sin contraseña ",
        email: correo,
        rut: rut,
        programa: programa,
        carrera: carrera,
        
      };
  
      await axios.post('http://localhost:8080/user/registrar/estudiante', requestBody)
      .then(response => {
        
        const id_res = response.data.id; // Reemplaza 'campo' con el nombre del campo que deseas extraer
        const msg = response.data.msg
        // Utiliza el campo específico
        // Guardar el id del usuario en localstorage
        
        const user = {
          nombre: nombre,
          apellido: apellido,
          correo: correo,
          id: id_res
        };
        
        const userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);

        //redirigir al home

        
      
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    // Envío de datos a la API local.
    console.log("Datos enviados:", { nombre, apellido, rut, programa, carrera, correo });
    
    
    crearUsuarioEstudiante();
    history.push('/home'); 

    // Restablecer valores originales:
    setNombre("");
    setApellido("");
    setRut("");
    setPrograma("");
    setCarrera("");
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Formulario estudiante</h2>
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
          <div>
            <label htmlFor="rut">RUT:</label>
            <input
              type="text"
              id="rut"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="programa">Programa:</label>
            <input
              type="text"
              id="programa"
              value={programa}
              onChange={(e) => setPrograma(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="carrera">Carrera:</label>
            <input
              type="text"
              id="carrera"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupFormEstudiante;
