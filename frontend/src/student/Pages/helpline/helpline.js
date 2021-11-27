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
      <div><BiIcons.BiPhoneCall size={40}/><span style={{fontFamily:'roboto'}}> +91 9229929292</span></div>
      <div><BiIcons.BiMailSend  size={40}/><span style={{fontFamily:'roboto'}}> Mail@mail.com</span></div>
      <div><BiIcons.BiLocationPlus  size={40}/><span style={{fontFamily:'roboto'}}>#2, Lorem street, Mumbai, India</span></div>
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
        <div style={{ paddingLeft: "5rem", paddingTop: "1rem"}}>
      <ContactInfo/>        
      </div>
      </Holder>
    </>
  );
}

export default Helpline;