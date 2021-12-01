import React, { useState } from "react";
import "./styles.scss";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import { quiz } from './testData';
import Quiz from "react-quiz-component";

function Tes() {
  return (
    <>
      <div>
        <Navbar />
        <div style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
        <Quiz quiz={quiz}></Quiz>
        </div>
      </div>
    </>
  );
}

export default Tes;
