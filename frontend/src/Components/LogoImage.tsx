import React from 'react';

const LogoImage = () => {
  return (
    <div className="position-absolute top-0 end-0 p-3">
      <img
        src="http://informatica.uach.cl/wp-content/uploads/2020/02/cropped-escudo-transparente.png"
        alt="Descripción de la imagen"
        style={{ 
          width: "130px",
          marginRight: "15px",
          marginTop: "5px", 
        }}
      />
    </div>
  );
};

export default LogoImage;
