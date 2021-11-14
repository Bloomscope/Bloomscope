import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import Home from './Home/index';
import Registration from './Register/Pages/Registration';
import Login from './Register/Pages/Login';
import AdminLogin from './Register/Pages/admin';

import Announcement from './admin/Pages/announcement/annoucement';
import StudentData from './admin/Pages/studentData/studentData';
import MassRegistration from './admin/Pages/massreg/massreg';
import TestCreation from './admin/Pages/TestCreation/TestCreation';

function App() {
return (
	<Router>
	<Routes>
	    <Route path='/' exact element={<Home/>} />	
		<Route path='/admin' exact element={<Admin/>}/>
		<Route path='/Registration' element={<Registration/>} />
		<Route path='/Login' element={<Login/>} />		
		<Route path='/adminLogin' exact element={<AdminLogin/>}/>

		<Route path='/admin/studentData' exact element={<StudentData/>} />
        <Route path='/admin/announcements' exact element={<Announcement/>} />
        <Route path='/admin/testCreation' exact element={<TestCreation/>} />
        <Route path='/admin/massregistration' exact element={<MassRegistration/>} />
	</Routes>
	</Router>
);
}

export default App;