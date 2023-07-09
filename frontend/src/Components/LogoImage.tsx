import React from "react";
import logo from "../images/info_logo.png";
const LogoImage = () => {
  return (
    <div className="position-absolute top-0 end-0 p-3">
      <img
        src={logo}
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
