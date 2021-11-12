import React from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function TestCreation() {
  return (
    <div className='TestCreation'>
      <Navbar />
      <Sidebar/>
		  <main className="content">
        <h1>TestCreation</h1>
      </main>
    </div>
  );
}

export default TestCreation;