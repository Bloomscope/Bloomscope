import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import events from './events';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import {login, useAuth, logout,getSessionState} from "../../../auth"
// import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function MyCalendar() {
  const [logged] = useAuth();
  const access = getSessionState();
  return (
    <>
    {logged&&access.type==1?<>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem" , width:"60vw"}}>
          <h1>Calendar</h1>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "70vh", backgroundColor:"white", padding:"2%" }}
          />
        </div>
      </Holder></>
      :
      <>
      <NotLoggedIn/>
      </>}
    </>
  );
}

export default MyCalendar;
