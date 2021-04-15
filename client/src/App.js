import './App.css';
import React from 'react';
import { AuthPage, Home } from './pages';
import { Route, Redirect } from 'react-router-dom';
import { RootContext } from './context';
function App() {
  const { state } = React.useContext(RootContext);
  return (
    <>
      <Route exact path="/home">
        {state.loggedIn ? <Home /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/">
        {!state.loggedIn ? <AuthPage /> : <Redirect to="/home" />}
      </Route>
    </>
  );
}

export default App;
