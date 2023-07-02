import React, { useState } from "react";
import "./popup.css"; // Importa los estilos CSS
const PopupFormAdmin = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario
    console.log("Datos enviados:", { nombre, apellido});
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
