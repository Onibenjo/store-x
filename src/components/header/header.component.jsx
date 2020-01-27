import React from "react";
import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import CartIcon from "./../cart-icon/cart-icon.component";
import CardDropdown from "./../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const { currentUser, hidden } = useSelector(state => ({
    ...state.user,
    ...state.cart
  }));
  console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link> 
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {currentUser.displayName} - SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CardDropdown />}
    </div>
  );
};

export default Header;
