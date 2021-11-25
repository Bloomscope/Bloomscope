import React, { useState } from "react";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import CustomButton from "../../../Register/components/custom-button/custom-button-component";

const Heading = styled.div`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
`;

const CalendarContainer = styled.div`

`;

const TestName = styled.div`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 0.5rem;
`;

const Holder = styled.div`
align-items: center;
display:flex;
flex-direction:row;
@media screen and (max-width: 768px) {
  flex-direction:column;
}
`;

function Calendar() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div>
        <Navbar />
        <div
          style={{
            width: "25%",
            position: "fixed",
            zIndex: "1",
            overflow: "auto",
          }}
        >
          {/* <Sidebar /> */}
        </div>
        <div style={{ paddingLeft: "30%", paddingTop: "2%" }}>
          <h1>Calendar</h1>
        </div>
        <Holder>
          <Cal onChange={onChange} value={value} />
          <div>
            <Heading>fsdfdsfsd</Heading>
            <TestName>Twfsfd</TestName>
            <TestName>4/4/4/4</TestName>
            <CustomButton>Submit</CustomButton>
          </div>
        </Holder>
      </div>
    </>
  );
}

export default Calendar;
