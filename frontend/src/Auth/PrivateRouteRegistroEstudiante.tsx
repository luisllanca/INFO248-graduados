// PrivateRoute.tsx
import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "../Components/styles/home.css";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRouteRegistroAdmin: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);

  const rol =
    localStorage.getItem("rol") !== "undefined"
      ? (localStorage.getItem("rol")!)
      : localStorage.clear();

  const user =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user")!)
    : localStorage.clear();
  

  useEffect(() => {
    const fetchAuthentication = async () => {
      try {
        await getAccessTokenSilently();
        setIsLoading(false);
      } catch (error) {
        // Manejo de errores en caso de fallo al obtener el token de acceso
        console.error('Error al obtener el token de acceso:', error);
        setIsLoading(false);
      }
    };

    fetchAuthentication();
  }, [getAccessTokenSilently]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          // Puedes mostrar un indicador de carga mientras se obtiene la autenticación
          <div className='load'></div>
        ) : isAuthenticated && rol === 'Estudiante' && user == null ? (
          
          <Component {...props} />
        ) : (
          <Redirect to="/autenticador" />
        )
      }
    />
  );
};

export default PrivateRouteRegistroAdmin
