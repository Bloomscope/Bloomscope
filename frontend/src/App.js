import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index';
import Parent_reg from './Pages/Parent_reg';
import Student_reg from './Pages/Student_reg';

function App() {
return (
	<Router>
	<Navbar/>	
	<Routes>
		<Route path='/Parent_reg' element={<Parent_reg/>} />
		<Route path='/Student_reg' element={<Student_reg/>} />		
		<Route path='/' exact element={<Home/>} />
	</Routes>
	</Router>
);
}

export default App;
