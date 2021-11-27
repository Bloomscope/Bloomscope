import React, { useState } from "react";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import data from "./announcements.json";

function Announcement() {
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
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "30%", paddingTop: "2%" }}>
          <h1 style = {{width:'80%',borderBottom : '5px solid black', borderWidth: "0px 0px 5px 0px"}}>Announcements</h1>
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
      </div>
    </>
  );
}

export default Announcement;
