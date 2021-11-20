import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Announcement from './Pages/announcement/annoucement';
// import StudentData from './Pages/studentData/studentData';
// import TestCreation from './Pages/TestCreation/TestCreation';
import SideBar from './Components/Sidebar';
import Navbar from './Components/Navbar';
// import s from './admin.scss';

function Student() {
return (
	
	<div className="layout" >
		<Navbar/>
		<div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
		<SideBar/>
		</div>
		<div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
			<h1>Student</h1>
		</div>
	</div>
);
}

export default Student;
