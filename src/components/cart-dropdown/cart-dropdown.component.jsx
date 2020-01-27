import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart.selectors";

const CardDropdown = () => {
  const cartItems = useSelector(state => selectCartItems(state));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default CardDropdown;
