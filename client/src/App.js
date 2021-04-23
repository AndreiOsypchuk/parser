import './App.css';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth, Home } from './pages';
import { withFade } from './utils';
import { RoutingTree } from './components';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = useSelector((store) => store.loggedIn);
  return (
    <RoutingTree>
      <Route path="/home">{isLoggedIn ? <Home /> : <Redirect to="/" />}</Route>
      <Route exact path="/">
        {!isLoggedIn ? <Auth /> : <Redirect to="/home" />}
      </Route>
      <Route path="*" component={() => <h1>Not fount</h1>} />
    </RoutingTree>
  );
}

export default withFade(App);
