import React from "react";
import "./TabButton.scss";

const TabButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <>
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} TabButton`}
      {...otherProps}
    >
      {children}
    </button>
  </>
);

export default TabButton;
