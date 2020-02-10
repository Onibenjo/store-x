import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForSale = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  const onToken = (token, others) => {
    console.log(token);
    console.log(others);
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
      locale='auto'
      panelLabel={`Pay Now for ${price}`}
      zipCode
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
