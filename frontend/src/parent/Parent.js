import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Announcement from './Pages/announcement/annoucement';
// import StudentData from './Pages/studentData/studentData';
// import TestCreation from './Pages/TestCreation/TestCreation';
import SideBar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import {login, useAuth, logout,getSessionState} from "../auth"
import NotLoggedIn from "../Register/Pages/notLoggedIn.jsx"
// import s from './admin.scss';

function Parent() {
	const [logged] = useAuth();
	const access = getSessionState();
return (
	<>{logged&&access.type==2?
		<>
	<div className="layout" >
		<Navbar/>
		<div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
		<SideBar/>
		</div>
		<div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
			<h1>Parent</h1>
		</div>
	</div></>
	:
	<>
    <NotLoggedIn/>
	</>}</>
);
}

export default Parent;
