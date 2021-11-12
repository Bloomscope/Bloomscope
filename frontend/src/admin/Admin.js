import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Announcement from './Pages/announcement/annoucement';
// import StudentData from './Pages/studentData/studentData';
// import TestCreation from './Pages/TestCreation/TestCreation';
import SideBar from './Components/Sidebar';
import Navbar from './Components/Navbar';
// import s from './admin.scss';

function Admin() {
return (
	<div className="layout">
		<Navbar/>
		<SideBar/>
		<div className="content">
			<h1>Admin</h1>
		</div>
        {/* <Routes>
          <Route path='/admin/studentData' exact element={<StudentData/>} />
          <Route path='/admin/announcements' exact element={<Announcement/>} />
          <Route path='/admin/testCreation' exact element={<TestCreation/>} />
        </Routes> */}
	</div>
);
}

export default Admin;
