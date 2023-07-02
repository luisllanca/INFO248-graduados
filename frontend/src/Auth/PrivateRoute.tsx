// PrivateRoute.tsx
import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);

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
          <div>Loading...</div>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
