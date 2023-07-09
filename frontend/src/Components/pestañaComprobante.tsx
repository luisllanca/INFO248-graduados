import React, { useState, useEffect } from "react";

import "./styles/home.css";

import axios from "axios";

const PestañaComprobante = () => {
  const [fileUrl, setFileUrl] = useState("");
  const compActual =
    localStorage.getItem("compImagen") !== "undefined"
      ? JSON.parse(localStorage.getItem("compImagen")!)
      : localStorage.clear();

  console.log(compActual);
  const id = compActual.id;
  useEffect(() => {
    axios
      .get(`http://146.83.216.251:8888/comprobantes/${id}`)
      .then((response) => {
        // Aquí puedes manejar la respuesta de la consulta
        var fileUrl = "";
        const imagen = response.data.Comprobantes.img;
        const extension = response.data.Comprobantes.extension;
        if (extension == "pdf") {
          fileUrl = `data:application/pdf;base64,${imagen}`;
        } else {
          fileUrl = `data:image;base64,${imagen}`;
        }
        console.log(fileUrl);
        setFileUrl(fileUrl);
      })
      .catch((error) => {
        // Aquí puedes manejar el error de la consulta
        console.error("Error al obtener el comprobante:", error);
      });
  }, []);

  return (
    <div className="pantalla">
      {fileUrl ? (
        fileUrl.startsWith("data:image") ? (
          <img src={fileUrl} alt="Imagen" />
        ) : (
          <embed
            src={fileUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PestañaComprobante;
