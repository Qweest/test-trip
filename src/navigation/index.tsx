import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from '../features/home';
import Results from '../features/results';
import { actions } from '../features/search/slice';
import { ROUTE_PATHS } from './constants';
import { MainContainer } from './styles';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {
          coords: { latitude, longitude },
        } = position;

        dispatch(actions.setCurrentLocation({ lat: latitude, lon: longitude }));
      });
    }
  }, []);

  return (
    <MainContainer>
      <Switch>
        <Route exact path={ROUTE_PATHS.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTE_PATHS.RESULTS}>
          <Results />
        </Route>
      </Switch>
    </MainContainer>
  );
};

export default Navigation;
