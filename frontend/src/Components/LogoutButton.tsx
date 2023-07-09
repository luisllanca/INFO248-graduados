import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/home.css";
const LogoutButton = () => {
  const { logout } = useAuth0();

  const salir = () => {
    localStorage.clear();
    logout({ logoutParams: { returnTo: "http://localhost:3333/login" } });
  };

  return (
    <button className="logout" onClick={salir}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
