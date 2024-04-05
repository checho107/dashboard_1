import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from './Contexto';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { estado } = useContext(Contexto);

  return (
    <Route
      {...rest}
      render={(props) =>
        estado ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default PrivateRoute;