import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import * as BiIcons from 'react-icons/bi';

const ContactInfo = () => {
  return(
    <>
      <h1 style = {{width:'80%',borderBottom : '5px solid black', borderWidth: "0px 0px 5px 0px"}}>Helpline</h1>
      <div><BiIcons.BiPhoneCall size={40}/><span style={{fontFamily:'roboto'}}> +91 9229929292</span></div>
      <div><BiIcons.BiMailSend  size={40}/><span style={{fontFamily:'roboto'}}> Mail@mail.com</span></div>
      <div><BiIcons.BiLocationPlus  size={40}/><span style={{fontFamily:'roboto'}}>#2, Lorem street, Mumbai, India</span></div>
    </>
  );
}

function Helpline() {
  return (
    <>
      <div>
        <Navbar />
        <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
      <Sidebar/>
      </div>
      <div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
      <ContactInfo/>        
      </div>
      </div>
    </>
  );
}

export default Helpline;