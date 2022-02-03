import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../components/login/Login';
import DashboardRouter from './DashboardRouter';
;


const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route path='/' component={DashboardRouter}/> 
        </Switch>
    </Router>
  );
};

export default AppRouter;
