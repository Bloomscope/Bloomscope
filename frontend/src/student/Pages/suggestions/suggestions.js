import React, {useState, useEffect} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import data from './suggestions.json'
import styled from "styled-components";
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import {login, useAuth, logout, getSessionState} from "../../../auth"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function Suggestions() {
  const access = getSessionState();
  const [logged] = useAuth();
  return (
    <>
    {logged&&access.type==1?<>
        <Navbar />
        <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem" ,width:"75vw" }}>
        <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Suggestions</h1>
            <div style={{ marginRight:"1rem",padding: "0.2rem 2rem",height:"70vh",overflowY:"scroll",backgroundColor:"white"}}>
            {data.map((item,i)=>(
              <span key={i}>
              <p style={{ borderStyle:"solid", border:"2px black", paddingTop: "15px 10px",fontSize:"1.1rem" }}>{item.time}: <br/>{item.post}</p>
              </span>
            ))}
            </div>
      </div>
      </Holder>
    </>
      :
      <>
      <NotLoggedIn/>
      </>}</>
  );
}

export default Suggestions;