import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {createStructuredSelector} from 'reselect';
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";

import "./sign-in-and-sign-up.styles.scss";
import { selectCurrentUser } from './../../redux/user/user.selectors';

const SignInAndSignUpPage = () => {
  const {currentUser} = useSelector(createStructuredSelector({ currentUser: selectCurrentUser }));

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
