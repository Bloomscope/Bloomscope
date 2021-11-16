import React from 'react';
import './styles.scss';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function TestCreation() {
  const options = [
  '1', '2', '3', '4', '5', '6','7','8','9', '10','11','12','13','14','15','16',
  '17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'
  ];
  const defaultOption = options[0]
  return (
    <div className='TestCreation'>
      <Navbar />
      <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
        <Sidebar/>
      </div>
      <div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
        <h1>Test Creation</h1>
        <div class="box1">
          <span>Start Day Number
          <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
          </span>
          <span>End Day Number
          <Dropdown options={options}  value={defaultOption} placeholder="Select an option" style={{width:"20px"}} />
          </span>
          <button>Add Parameter</button>
        </div>
      </div>
    </div>
  );
}

export default TestCreation;