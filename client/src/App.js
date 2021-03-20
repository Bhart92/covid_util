import React, {Fragment} from 'react';
import Routes from './components/routing/Routes';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';


const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
