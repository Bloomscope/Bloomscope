import React, { useState,useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import {authFetch, useAuth, getSessionState} from "../../../auth"

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
  const [schedule, setschedule] = useState([]);

  const makelist = (a)=>{
    var list = []
    for (var i = 0; i < a.length; i++) {
      let opts = {
        'title': a[i]['name'],
        'start': new Date( a[i]['starts_on']),
        'end':  new Date(a[i]['ends_on']),
      }
      console.log(opts)
      list.push(opts)
  }
  console.log(list)
    setschedule(list);
  }

  useEffect(()=>{
    authFetch('/api/get_tests',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      console.log(r)
      if(r.data)
      makelist(r.data)
    })
    .catch(error => console.log(error))}, [])

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
            events={schedule}
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
