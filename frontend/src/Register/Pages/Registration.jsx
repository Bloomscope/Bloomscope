import React, { useState } from "react";
import SignUp_parent from "../components/sign-up/signup_parent";
import SignUp_student from "../components/sign-up/signup_student";
import Navbar from "../../Home/components/Navbar";
import TabButton from "../components/TabButton/TabButton";
import { FaUserGraduate, FaUserFriends } from "react-icons/fa";

const Registration = () => {
  const [OpenTab, SetOpenTab] = useState(true);

  return (
    <>
      <Navbar />

      <TabButton onClick={() => SetOpenTab(!OpenTab)}>
        <FaUserGraduate className="FaUserGraduate" />
        parent
      </TabButton>
      <TabButton onClick={() => SetOpenTab(!OpenTab)}>
        <FaUserFriends className="FaUserGraduate" />
        student
      </TabButton>
      
      <SignUp_parent view={OpenTab} />
      <SignUp_student view={OpenTab} />
    </>
  );
};

export default Registration;
