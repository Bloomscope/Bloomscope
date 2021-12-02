import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import StudentRegistration from './Register/Pages/studentRegistration';
import ParentRegistration from './Register/Pages/parentRegistration';
import StudentSignIn from './Register/Pages/StudentSignIn';
import ParentSignIn from './Register/Pages/ParentSignIn';
import Logout from './Register/Pages/logout';
import AdminLogin from './Register/Pages/admin';

import Admin from './admin/Admin';
import Announcement from './admin/Pages/announcement/annoucement';
import StudentData from './admin/Pages/studentData/studentData';
import MassRegistration from './admin/Pages/massreg/massreg';
import TestCreation from './admin/Pages/TestCreation/TestCreation';
import Token from './admin/Pages/Token/token';

import Student from './student/Student';
import SAnnouncement from './student/Pages/announcement/annoucement';
import Dashboard from './student/Pages/dashboard/dashboard';
import Suggestions from './student/Pages/suggestions/suggestions';
import Helpline from './student/Pages/helpline/helpline';
import Calendar from './student/Pages/calendar/calendar';
import Quiz from './student/Pages/Quiz/Quiz';

import Parent from './parent/Parent';
import PAnnouncement from './parent/Pages/announcement/annoucement';
import PDashboard from './parent/Pages/dashboard/dashboard';
import PSuggestions from './parent/Pages/suggestions/suggestions';
import PHelpline from './parent/Pages/helpline/helpline';
import PCalendar from './parent/Pages/calendar/calendar';

function App() {
return (
	<Router>
	<Routes>
	    <Route path='/' exact element={<Home/>} />	
	    <Route path='/logout' exact element={<Logout/>} />	
		<Route path='/studentRegistration' element={<StudentRegistration/>} />
		<Route path='/parentRegistration' element={<ParentRegistration/>} />
		<Route path='/studentSignIn' element={<StudentSignIn/>} />		
		<Route path='/parentSignIn' element={<ParentSignIn/>} />		
		<Route path='/adminLogin' exact element={<AdminLogin/>}/>
		
		<Route path='/admin' exact element={<Admin/>}/>
		<Route path='/admin/studentData' exact element={<StudentData/>} />
        <Route path='/admin/announcements' exact element={<Announcement/>} />
        <Route path='/admin/testCreation' exact element={<TestCreation/>} />
        <Route path='/admin/massregistration' exact element={<MassRegistration/>} />
        <Route path='/admin/token' exact element={<Token/>} />
		
		<Route path='/student' exact element={<Student/>}/>
		<Route path='/student/dashboard' exact element={<Dashboard/>} />
        <Route path='/student/announcements' exact element={<SAnnouncement/>} />
        <Route path='/student/suggestions' exact element={<Suggestions/>} />
        <Route path='/student/helpline' exact element={<Helpline/>} />
        <Route path='/student/Quiz' exact element={<Quiz/>} />
        <Route path='/student/calendar' exact element={<Calendar/>} />
	
		<Route path='/parent' exact element={<Parent/>}/>
		<Route path='/parent/dashboard' exact element={<PDashboard/>} />
        <Route path='/parent/announcements' exact element={<PAnnouncement/>} />
        <Route path='/parent/suggestions' exact element={<PSuggestions/>} />
        <Route path='/parent/helpline' exact element={<PHelpline/>} />
        <Route path='/parent/calendar' exact element={<PCalendar/>} />
	</Routes>
	</Router>
);
}

export default App;