import React, { useState } from "react";
import SignUp_parent from "../components/sign-up/signup_parent";
import SignUp_student from "../components/sign-up/signup_student";
import Navbar from "../../Home/components/Navbar";
import TabButton from "../components/TabButton/TabButton";
import { FaUserGraduate, FaUserFriends } from "react-icons/fa";

const StudentRegistration = () => {
  // const [OpenTab_Parent, SetOpenTab_Parent] = useState(true);
  // const [OpenTab_Student, SetOpenTab_Student] = useState(false);

  return (
    <div style = {{backgroundColor:"white", height:"100%"}}>
      <Navbar />
      <div style={{paddingTop:"1rem"}}>

        <SignUp_student />
      {/* <TabButton onClick={() => {SetOpenTab_Parent(true);SetOpenTab_Student(false)}}>
        <FaUserGraduate className="FaUserGraduate" />
        parent
      </TabButton> */}
      {/* <TabButton onClick={() => {SetOpenTab_Student(true);SetOpenTab_Parent(false)}}>
        <FaUserFriends className="FaUserGraduate" />
        student
      </TabButton> */}
      </div>
      {/* <SignUp_parent view={OpenTab_Parent} /> */}
      {/* <SignUp_student /> */}
    </div>
  );
};

export default StudentRegistration;
