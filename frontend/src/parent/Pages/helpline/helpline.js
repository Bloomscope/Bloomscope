import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import * as BiIcons from 'react-icons/bi';
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

const ContactInfo = () => {
  return(
    <div>
      <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Helpline</h1>
      <div style={{ paddingLeft: "2rem", paddingTop: "1rem",width:"68vw",height:"68vh",backgroundColor:"white"}}>
        <div style={{padding:"0.5rem 0 "}}><BiIcons.BiPhoneCall size={30} style={{paddingRight:"10px"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}> +91 9229929292</span></div>
        <div style={{padding:"0.5rem 0 "}}><BiIcons.BiMailSend  size={30} style={{paddingRight:"10px"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}> Mail@mail.com</span></div>
        <div style={{padding:"0.5rem 0 "}}><BiIcons.BiLocationPlus size={30} style={{paddingRight:"10px"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}>#2, Lorem street, Mumbai, India</span></div>
      </div>
    </div>
  );
}

function Helpline() {
	const [logged] = useAuth();
	const access = getSessionState();
  return (
    <>{logged&&access.type==2?
      <>
        <Navbar />
        <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem"}}>
      <ContactInfo/>        
      </div>
      </Holder>
      </>
	:
	<>
    <NotLoggedIn/>
	</>}</>
  );
}

export default Helpline;