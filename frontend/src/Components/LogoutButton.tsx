import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/home.css";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='logout' onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:3000/login'} })}>
      Cerrar sesión
    </button>
    
  );
};

export default LogoutButton;