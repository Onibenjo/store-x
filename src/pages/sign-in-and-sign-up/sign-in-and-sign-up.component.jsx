import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { useSelector } from "react-redux";
import { navigate } from "@reach/router";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  if (currentUser) {
    navigate("/");
  }

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
