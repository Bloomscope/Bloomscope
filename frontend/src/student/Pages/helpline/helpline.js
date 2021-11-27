import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import * as BiIcons from 'react-icons/bi';
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = () => {
  return(
    <>
      <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Helpline</h1>
      <div style={{padding:"0.5rem 0 "}}><BiIcons.BiPhoneCall size={30} style={{paddingRight:"10px"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}> +91 9229929292</span></div>
      <div style={{padding:"0.5rem 0 "}}><BiIcons.BiMailSend  size={30} style={{paddingRight:"10px"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}> Mail@mail.com</span></div>
      <div style={{padding:"0.5rem 0 "}}><BiIcons.BiLocationPlus size={30} style={{paddingRight:"10px"}}/><span style={{fontFamily:'roboto',fontSize:"1.1rem"}}>#2, Lorem street, Mumbai, India</span></div>
    </>
  );
}

function Helpline() {
  return (
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
  );
}

export default Helpline;