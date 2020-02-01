import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

// const CustomButtonOld = ({
//   children,
//   inverted,
//   isGoogleSignIn,
//   ...otherProps
// }) => (
//   <button
//     className={`
//     ${inverted ? "inverted" : ""} 
//     ${isGoogleSignIn ? "google-sign-in" : ""} 
//     custom-button`}
//     {...otherProps}>
//     {children}
//   </button>
//   );

const CustomButton = ({
  children,
  ...otherProps
}) => (
  <CustomButtonContainer
    {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
