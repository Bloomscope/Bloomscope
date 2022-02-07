import React, { useState } from "react";
import SignUp_parent from "../components/sign-up/signup_parent";
import Navbar from "../../Home/components/Navbar";

const ParentRegistration = () => {

  return (
    <div style = {{backgroundColor:"white", height:"100%"}}>
      <Navbar />
      <div style={{paddingTop:"1rem"}}>

        <SignUp_parent />
      </div>
    </div>
  );
};

export default ParentRegistration;
