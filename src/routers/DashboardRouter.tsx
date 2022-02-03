import React from 'react';
import {
    Switch, Route, Redirect
} from 'react-router-dom';
import HomeScreen from '../components/home/HomeScreen';
import TodosScreen from '../components/todos/TodosScreen';
import NavBar from '../components/ui/NavBar';
;


const DashboardRouter = () => {
  return(
      <>
        <NavBar />
        <div className="container">
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/todos' component={TodosScreen} />
                <Redirect to="/" />
            </Switch>
        </div>
      </>
  )
};

export default DashboardRouter;
