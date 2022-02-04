import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../components/login/Login';
import TodoContext from '../context/TodoContext';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
const AppRouter = () => {
  const { loginState } = useContext(TodoContext);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={Login}
          isAuthenticated={loginState.isLogin}
        />
        <PrivateRoute
          path="/"
          component={DashboardRouter}
          isAuthenticated={loginState.isLogin}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
