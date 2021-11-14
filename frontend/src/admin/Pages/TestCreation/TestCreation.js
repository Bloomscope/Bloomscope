import React from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function TestCreation() {
  return (
    <div className='TestCreation'>
      <Navbar />
      <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
        <Sidebar/>
      </div>
      <div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
        <h1>Test Creation</h1>
      </div>
    </div>
  );
}

export default TestCreation;