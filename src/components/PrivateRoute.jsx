/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { me } from '../store/user/actions';
import TokenService from '../services/core/TokenService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    dispatch(me());
  }, [location.pathname]);

  useEffect(() => {
    setIsAuthenticated(user?.id || TokenService.getToken());
  }, [user]);

  if (isAuthenticated === null) {
    return <></>;
  }

  return (
    <Route
      {...rest}
      render={(props) => (!isAuthenticated ? (
        <Redirect to="/login" />
      ) : (<Component {...props} />
      ))}
    />
  );
};

export default PrivateRoute;
