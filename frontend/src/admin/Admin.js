import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Announcement from './Pages/announcement/annoucement';
// import StudentData from './Pages/studentData/studentData';
// import TestCreation from './Pages/TestCreation/TestCreation';
import SideBar from './Components/Sidebar';
import Navbar from './Components/Navbar';
// import s from './admin.scss';
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;



function Admin() {
return (
	
	<>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <SideBar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem" }}>
			<h1>Admin</h1>
		</div>
        {/* <Routes>
          <Route path='/admin/studentData' exact element={<StudentData/>} />
          <Route path='/admin/announcements' exact element={<Announcement/>} />
          <Route path='/admin/testCreation' exact element={<TestCreation/>} />
        </Routes> */}
	</Holder></>
);
}

export default Admin;
