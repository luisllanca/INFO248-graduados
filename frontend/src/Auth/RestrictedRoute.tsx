// RestrictedRoute.tsx
import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface RestrictedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/autenticacion" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RestrictedRoute;
