import React, { useState, useContext } from "react";
import { Router } from "@reach/router";
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
    <Router>
      <LandingPage path="/" />
      <SignUp path="signUp" />
      <SignIn path="signIn" />
      <PasswordReset path="passwordReset" />
      <Quiz path="quiz" />
      <Dashboard path="dashboard" />
    </Router>
  );
}
export default Application;
