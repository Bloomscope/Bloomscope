import React, { useState, useEffect } from "react";
import "./announcement.styles.css";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import {useAuth,authFetch, getSessionState} from "../../../auth"
import styled from "styled-components";
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Announcement() {
  const [logged] = useAuth();
  const access = getSessionState();
  const [announcements, setannouncements] = useState([]);
  
  useEffect(()=>{
    authFetch('/api/user_get_announcements',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      if(r.announcements !== undefined )
      setannouncements(r.announcements);
    })
    .catch(error => console.log(error))})

  return (
    <>{logged&&access.type==1?<>
      <Navbar />
      <Holder>
        <div >
          <Sidebar />
        </div>
        <div className="main">
        <h1 style = {{width:'80%', borderWidth: "0px 0px 5px 0px"}}>Announcements</h1>
            <div className="ann">
            {announcements.map((item,i)=>(
              <span key={i}>
              <p style={{ borderStyle:"solid", border:"2px black", paddingTop: "15px 10px",fontSize:"1.1rem" }}><b>{item.title}</b>: ({item.announced_on}) <br/>{item.content}</p>
              </span>
            ))}
            </div>
      </div>
        </Holder>
    </>:<>
    <NotLoggedIn/>
          </>}</>
  );
}

export default Announcement;
