import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForSale = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  console.log(publishableKey);

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      name="Store X"
      label="Pay Now"
      description={`Your total is $${price}`}
      amount={priceForSale}
      currency="NGN"
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
