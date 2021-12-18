import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import StudentRegistration from './Register/Pages/studentRegistration';
import ParentRegistration from './Register/Pages/parentRegistration';
import SignIn from './Register/Pages/SignIn';
import Payment from './Register/Pages/payment';
import Logout from './Register/Pages/logout';
import AdminLogin from './Register/Pages/admin';

import Announcement from './admin/Pages/announcement/annoucement';
import StudentData from './admin/Pages/studentData/studentData';
import MassRegistration from './admin/Pages/massreg/massreg';
import TestCreation from './admin/Pages/TestCreation/TestCreation';
import Token from './admin/Pages/Token/token';
import AddQuestions from './admin/Pages/questions/questions';
import ADashboard from './admin/Pages/dashboard/dashboard';

import SAnnouncement from './student/Pages/announcement/annoucement';
import Dashboard from './student/Pages/dashboard/dashboard';
import Suggestions from './student/Pages/suggestions/suggestions';
import Helpline from './student/Pages/helpline/helpline';
import Calendar from './student/Pages/calendar/calendar';
import Quiz from './student/Pages/Quiz/Quiz';

import PAnnouncement from './parent/Pages/announcement/annoucement';
import PDashboard from './parent/Pages/dashboard/dashboard';
import PSuggestions from './parent/Pages/suggestions/suggestions';
import PHelpline from './parent/Pages/helpline/helpline';
import PCalendar from './parent/Pages/calendar/calendar';

import DownloadButton from './temp/downloadbutton/downloadbutton';

function App() {
return (
	<Router>
	<Routes>
	    <Route path='/' exact element={<Home/>} />	
	    <Route path='/logout' exact element={<Logout/>} />	
		<Route path='/studentRegistration' element={<StudentRegistration/>} />
		<Route path='/parentRegistration' element={<ParentRegistration/>} />
		<Route path='/signIn' element={<SignIn/>} />	
		<Route path='/payment' element={<Payment/>} />		
		<Route path='/adminLogin' exact element={<AdminLogin/>}/>
		
		<Route path='/admin/studentData' exact element={<StudentData/>} />
        <Route path='/admin/announcements' exact element={<Announcement/>} />
        <Route path='/admin/testCreation' exact element={<TestCreation/>} />
        <Route path='/admin/massregistration' exact element={<MassRegistration/>} />
        <Route path='/admin/token' exact element={<Token/>} />
        <Route path='/admin/addquestions' exact element={<AddQuestions/>} />
		<Route path='/admin/dashboard' exact element={<ADashboard/>} />
		
		<Route path='/student/dashboard' exact element={<Dashboard/>} />
        <Route path='/student/announcements' exact element={<SAnnouncement/>} />
        <Route path='/student/suggestions' exact element={<Suggestions/>} />
        <Route path='/student/helpline' exact element={<Helpline/>} />
        <Route path='/student/Quiz' exact element={<Quiz/>} />
        <Route path='/student/calendar' exact element={<Calendar/>} />
	
		<Route path='/parent/dashboard' exact element={<PDashboard/>} />
        <Route path='/parent/announcements' exact element={<PAnnouncement/>} />
        <Route path='/parent/suggestions' exact element={<PSuggestions/>} />
        <Route path='/parent/helpline' exact element={<PHelpline/>} />
        <Route path='/parent/calendar' exact element={<PCalendar/>} />

		<Route path='/download' exact element={<DownloadButton/>} />

		
	</Routes>
	</Router>
);
}

export default App;