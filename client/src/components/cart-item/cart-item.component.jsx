import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <span className="cart-item">
      <img src={imageUrl} alt={`${name} item`} />
      <span className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x N{price}
        </span>
      </span>
    </span>
  );
};

export default CartItem;
