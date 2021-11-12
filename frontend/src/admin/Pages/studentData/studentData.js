import React from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function StudentData() {
  return (
    <div className='StudentData'>
      <Navbar />
      <Sidebar/>
		  <main className="content">
        <h1>StudentData</h1>
      </main>
    </div>
  );
}

export default StudentData;