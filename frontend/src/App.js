import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import Home from './Home/index';
import Registration from './Register/Pages/Registration';
import Login from './Register/Pages/Login';
import AdminLogin from './Register/Pages/admin';

function App() {
return (
	<Router>
	<Routes>
	    <Route path='/' exact element={<Home/>} />	
		<Route path='/admin' exact element={<Admin/>}/>
		<Route path='/Registration' element={<Registration/>} />
		<Route path='/Login' element={<Login/>} />		
		<Route path='/adminLogin' exact element={<AdminLogin/>}/>
	</Routes>
	</Router>
);
}

export default App;