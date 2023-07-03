import React, { useState, useEffect } from 'react';

import axios from 'axios';

const PestañaComprobante = () => {
    const [image, setImage] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8080/comprobantes')
        .then(response => {
            // Aquí puedes manejar la respuesta de la consulta
            const imagen = response.data.Comprobantes[3].img;
            const imageUrl = `data:image/png;base64,${imagen}`;
            console.log(response.data);
            setImage(imageUrl);
        })
        .catch(error => {
            // Aquí puedes manejar el error de la consulta
            console.error('Error al obtener el comprobante:', error);
        });
    }, []);

  return (
    <div>
      <img src={image} alt="Imagen" />
    </div>
  );
};

export default PestañaComprobante;