import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../features/home';
import { ROUTE_PATHS } from './constants';

const Navigation: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_PATHS.HOME}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Navigation;
