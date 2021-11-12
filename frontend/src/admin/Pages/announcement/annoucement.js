import React from 'react';
import'./styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function Announcement() {
  return (
    <div className='announcement'>
      <Navbar />
      <Sidebar/>
		  <main className="content">
        <h1>Announcement</h1>
      </main>
    </div>
  );
}

export default Announcement;