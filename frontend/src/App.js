import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Parent_reg from './pages/Parent_reg';
import Student_reg from './pages/Student_reg';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/Parent_reg' component={Parent_reg} />
		<Route path='/Student_reg' component={Student_reg} />
	</Routes>
	</Router>
);
}

export default App;
