import React, {useState} from 'react';
import './styles.scss';
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import qBank from './tests.json'

const Questions = styled.div`
padding:2rem;
`;

function Test() {
  return (
    <>
      <div>
        <Navbar />
        <div>
        {qBank.map((q,i)=>(
          <div>
          <form>
            <label>{q.question}</label>
            <input type="radio" value={q.A}/>
          </form>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Test;