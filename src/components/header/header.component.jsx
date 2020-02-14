import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

// import { auth } from "../../firebase/firebase.utils";
import CartIcon from "./../cart-icon/cart-icon.component";
import CardDropdown from "./../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import { selectCartHidden } from "./../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./header.styles.scss";
import { signOutStart } from "./../../redux/user/user.actions";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser, hidden } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
    })
  );
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            onClick={() => {
              dispatch(signOutStart());
            }}>
            {currentUser.displayName} - SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CardDropdown />}
    </HeaderContainer>
  );
};

export default Header;
