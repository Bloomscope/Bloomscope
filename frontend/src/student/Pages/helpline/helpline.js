import React, {useState} from 'react';
import './helplineStyles.css';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import * as BiIcons from 'react-icons/bi';
import styled from "styled-components";
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import {login, useAuth, logout,getSessionState} from "../../../auth"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function Helpline() {
  const [logged] = useAuth();
  const access = getSessionState();
  return (
    <>
    {logged&&access.type==1?<>
        <Navbar />
        
        <Holder>
          <div><Sidebar/></div>
        
        <div className='main'>
        <h1>Helpline</h1>
        <div className='helplinea'>
        <div style={{padding:"0.5rem 0 "}}><BiIcons.BiMailSend  size={30} style={{paddingRight:"2%"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}>  connect@bloomscope.org </span></div>
          <div style={{padding:"0.5rem 0 "}}><BiIcons.BiLocationPlus size={30} style={{paddingRight:"2%"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}>Prof. Snehal Awate, #208, SJMSOM building, IIT Bombay, Powai Mumbai 400076</span></div>

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

export default Helpline;