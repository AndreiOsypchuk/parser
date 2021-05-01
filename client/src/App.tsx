import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Auth } from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route>
          <h1>NO page like this OwO</h1>{" "}
        </Route>
      </Switch>
    </>
  );
}

export default App;
