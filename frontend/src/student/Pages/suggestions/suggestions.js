import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import data from './suggestions.json'
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Suggestions() {
  return (
    <>
        <Navbar />
        <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "5rem", paddingTop: "1rem" }}>
        <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Suggestions</h1>
        <div style = {{width:'60%'}} class='log'>
          <h2>Suggestions for you</h2>
            <div>
            {data.map((item,i)=>(
              <span key={i}>
              <p class="logs"><b>{item.title}</b>: {item.post}</p>
              </span>
            ))}
            </div>
        </div>
      </div>
      </Holder>
    </>
  );
}

export default Suggestions;