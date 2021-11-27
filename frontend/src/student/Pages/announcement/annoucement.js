import React, { useState } from "react";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import data from "./announcements.json";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Announcement() {
  return (
    <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem" }}>
          <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Announcements</h1>
          <div style={{ paddingRight: "4rem",height:"70vh",overflowY:"scroll"}}>
            {data.map((item,i)=>(
              <span key={i}>
              <p style={{ borderStyle:"solid", border:"2px black", paddingTop: "15px 10px",fontSize:"1.1rem" }}><b>{item.title}</b>: <br/>{item.post}</p>
              </span>
            ))}
            </div>
        </div>
        </Holder>
    </>
  );
}

export default Announcement;
