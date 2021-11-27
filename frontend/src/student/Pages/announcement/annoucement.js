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
        <div style={{ paddingLeft: "5rem", paddingTop: "1rem" }}>
          <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Announcements</h1>
          <div class="log">
            <h2>Logs</h2>
            <div>
              {data.map((item, i) => (
                <span key={i}>
                  <p class="logs">
                    <b>{item.title}</b>: {item.post}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>
        </Holder>
    </>
  );
}

export default Announcement;
