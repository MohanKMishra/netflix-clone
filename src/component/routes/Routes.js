import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../auth/Login";
import Movielist from "../auth/Movielist";
import Home from "../home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/Movielist">
        <Movielist />
      </Route>
    </Switch>
  );
};

export default Routes;
