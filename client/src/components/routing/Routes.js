import React, {Fragment} from 'react';
import LandingPage from '../landing/LandingPage';
import NotFound from '../notFound/NotFound';

import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Fragment>
        <Switch>
          <Route exact path='/'component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
    </Fragment>

  );
};


export default Routes;