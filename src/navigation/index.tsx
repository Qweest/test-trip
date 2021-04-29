import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../features/home';
import Results from '../features/results';
import { ROUTE_PATHS } from './constants';
import { MainContainer } from './styles';

const Navigation: React.FC = () => {
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
