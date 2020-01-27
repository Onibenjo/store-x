import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { navigate } from "@reach/router";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

const CardDropdown = () => {
  const { cartItems } = useSelector(
    createStructuredSelector({ cartItems: selectCartItems })
  );
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}>
        CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CardDropdown;
