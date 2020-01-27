import React, { useEffect } from "react";
import { Router } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          );
        });
        return;
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div style={{ width: "90vw", height: "80vh" }}>
      <img
        src="./spinner.gif"
        alt="Loading..."
        style={{ margin: "3rem auto", display: "block" }}
      />
    </div>
  ) : (
    <div>
      <Header />
      <Router>
        <HomePage path="/" />
        <ShopPage path="/shop" />
        <SignInAndSignUpPage path="/signin" />
        <NotFound default />
      </Router>
    </div>
  );
};

const NotFound = () => (
  <div
    style={{
      minHeight: "70vh",
      width: "80vw",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3rem"
    }}>
    Page Not Found
  </div>
);

export default App;
