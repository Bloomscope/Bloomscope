import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function Helpline() {
  return (
    <>
      <div>
        <Navbar />
        <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
      <Sidebar/>
      </div>
      <div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
        <h1>Helpline</h1>
      </div>
      </div>
    </>
  );
}

export default Helpline;