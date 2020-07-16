import React, { useState, useContext } from "react";
import { Router } from "@reach/router";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import { UserContext } from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Dashboard from "./Dashboard";

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/passwordReset" component={LandingPage} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default Application;
