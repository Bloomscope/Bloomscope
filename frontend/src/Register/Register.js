import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import AdminLogin from './Pages/admin';

function Register() {
return (
	<Router>
	<Navbar/>	
	<Routes>
	    <Route path='/' exact element={<Home/>} />
		<Route path='/Registration' element={<Registration/>} />
		<Route path='/Login' element={<Login/>} />		
		<Route path='/admin' exact element={<AdminLogin/>}/>
	</Routes>
	</Router>
);
}

export default Register;
