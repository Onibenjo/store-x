import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import { auth } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart
} from "./../../redux/user/user.actions";
import "./sign-in.styles.scss";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    // try {
    const { email, password } = state;
    // await auth.signInWithEmailAndPassword(email, password);
    dispatch(emailSignInStart({ email, password }));
    // } catch (error) {
    //   console.log(error);
    // }
    setState({ email: "", password: "" });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={state.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          {/* // type of button to prevent submission when clicked */}
          <CustomButton
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
            type="button">
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
