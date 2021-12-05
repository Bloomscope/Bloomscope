import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {login, useAuth, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function AddQuestions() {
//   const [title, settitle] = useState('');
//   const [post, setpost] = useState('');
	const [logged] = useAuth();
	const access = getSessionState();
  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Add Questions</h1>
        <div style = {{float:"left",width:"67vw",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
        {/* <form>
              <div style={{width:"45%",float:"left"}}>
             <label> Test Name: 
               <input type='text' />
              </label></div>
              <div style={{width:"45%",float:"right"}}>
              <label> Duration (in hours): 
               <input type='text' />
              </label></div>
              <div style={{width:"45%",float:"left"}}>
             <label> Start Day Number: 
               <input type='text' />
              </label></div>
              <div style={{width:"45%",float:"right"}}>
              <label> End Day Number: 
               <input type='text' />
              </label></div>
          </form> */}
         </div>
      </div>
      </Holder>
    </>
	:
	<>
    <NotLoggedIn/>
	</>}</>
  );
}

export default AddQuestions;