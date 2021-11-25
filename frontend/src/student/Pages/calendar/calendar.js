import React, { useState } from "react";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import TestScheduled from "./testScheduled";


const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function Calendar() {
  return (
    <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "5rem", paddingTop: "1rem" }}>
          <h1>Calendar</h1>
          <TestScheduled name="Test name" description="Test desc" date="2021/09/01"/>
          <TestScheduled name="Test name2" description="Test desc2" date="2021/12/01"/>
          <TestScheduled name="Test name2" description="Test desc2" date="2021/12/01"/>
          <TestScheduled name="Test name2" description="Test desc2" date="2021/12/01"/>
        </div>
      </Holder>
    </>
  );
}

export default Calendar;
