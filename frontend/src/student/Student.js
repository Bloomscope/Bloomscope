import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Announcement from './Pages/announcement/annoucement';
// import StudentData from './Pages/studentData/studentData';
// import TestCreation from './Pages/TestCreation/TestCreation';
import SideBar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import {login, useAuth, logout, getSession, getSessionState} from "../auth"
import NotLoggedIn from "../Register/Pages/notLoggedIn.jsx"
import { BrowserRouter, Routes, Navigate,Link  } from 'react-router-dom';
// import s from './admin.scss';
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Student() {
//   useEffect(()=>{
//   fetch('/api/',{
//     'methods':'GET',
//     headers : {
//       'Content-Type':'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(response => setArticles(response))
//   .catch(error => console.log(error))
  
  const [logged] = useAuth();
  
  const access = getSessionState();

  const onSubmitClick = (e)=>{
      console.log("controller unmatched: ", access.type);
  }
  return (
  <>
      {logged&&access.type==1?
          <>
              <Navbar />
              <Holder>
                    <div style={{ padding: "0 0.5rem" }}>
                      <SideBar />
                    </div>
                    <div style={{ paddingLeft: "6rem", paddingTop: "1rem" }}>
                      <h1>Student</h1>
                    </div>
              </Holder>
              <button onClick={onSubmitClick} type='submit'>SIGN UP</button>
              {/* {access} */}
          </>
          :
          <>
          <NotLoggedIn/>
          </>}
  </>
);
}

export default Student;
