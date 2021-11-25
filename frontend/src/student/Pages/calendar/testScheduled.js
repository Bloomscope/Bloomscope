import React, { useState } from "react";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import styled from "styled-components";
import CustomButton from "../../../Register/components/custom-button/custom-button-component";

const Heading = styled.div`
  align-items: center;
  text-decoration: bold;
  padding: 0 1rem;
  font-size: 2rem;
`;

const CalendarContainer = styled.div`
  margin: 1rem;
  padding: 0 2rem;
`;

const TestName = styled.div`
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
`;

const TestDetails = styled.div`
  padding: 2rem;
  padding-left: 30rem;
`;

const Container = styled.div`
display: flex;
margin-top: 1rem;
  flex-direction: row;
  align-items: center;
  border: 5px solid black;
  border-width: 5px 0px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestScheduled = ({name,description,date}) => {    
  const [value, onChange] = useState(new Date(date));
  return (
    <Container style={{}}>
      <CalendarContainer>
        <Cal onChange={onChange} value={value} />
      </CalendarContainer>
      <TestDetails>
        <Heading>{name}</Heading>
        <TestName>{description}</TestName>
        <TestName>{date}</TestName>
        <CustomButton>View Result</CustomButton>
      </TestDetails>
    </Container>
  );
};

export default TestScheduled;
