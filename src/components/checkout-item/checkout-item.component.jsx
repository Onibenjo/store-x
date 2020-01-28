import React, { useCallback } from "react";
import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, imageUrl } = cartItem;

   const decrementCounter = useCallback(
    () => dispatch(removeItem(cartItem)),
    [cartItem, dispatch]
  );
   const incrementCounter = useCallback(
    () => dispatch(addItem(cartItem)),
    [cartItem, dispatch]
  );

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} item`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementCounter}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementCounter}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
