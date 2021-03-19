/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Route, Redirect, useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../store/charts/actions';
import { me } from '../store/user/actions';
import TokenService from '../services/core/TokenService';

const ChartDataRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const charts = useSelector((state) => state.charts.charts);
  const [isValidRoute, setIsValidRoute] = useState(null);
  const location = useLocation();
  const { id } = rest.computedMatch.params;
  useEffect(() => {
    dispatch(fetch());
    dispatch(me());
  }, [location.pathname]);

  useEffect(() => {
    if (charts.length) {
      setIsValidRoute((Boolean(charts.find((chart) => chart.id == id) && (user?.id || TokenService.getToken()))));
    }
  }, [charts.length, user]);

  if (isValidRoute === null) {
    return <></>;
  }

  return (
    <Route
      {...rest}
      render={(props) => (!isValidRoute ? (
        <Redirect to="/charts" />
      ) : (<Component {...{ ...props, chart: charts.find((chart) => chart.id == id) }} />
      ))}
    />
  );
};

export default ChartDataRoute;
