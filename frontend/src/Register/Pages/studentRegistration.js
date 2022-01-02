import React from "react";
import SignUp_student from "../components/sign-up/signup_student";
import Navbar from "../../Home/components/Navbar";

const StudentRegistration = () => {

  return (
    <div style = {{backgroundColor:"white", height:"100%"}}>
      <Navbar />
      <div style={{paddingTop:"1rem"}}>
        <SignUp_student />
      </div>
    </div>
  );
};

export default StudentRegistration;
