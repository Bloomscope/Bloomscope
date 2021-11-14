import React from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import data from './data.json';

function StudentData() {
  return (
    <div className='StudentData'>
      <Navbar />
      <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
		<Sidebar/>
		</div>
		<div style = {{paddingLeft:'30%', paddingTop: '2%',paddingRight: '4%'}}>
			<div>
        <h1>Student Data</h1>
        <hr/>
        {data.map((item,id) => {
            return (
              <div className = 'row'>
              <div className = 'col1'>{item.firstname} {item.lastname}</div>
              <div className = 'col2'>{item.organisation}</div>
              <div className = 'col3'>{item.subscribedOn}</div>
              <div className = 'col4'>{item.phone}</div>
              </div>
            );
        })}
      </div>
		</div>
    </div>
  );
}

export default StudentData;