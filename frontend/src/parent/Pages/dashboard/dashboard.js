import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Chart from './dchart'
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Dashboard() {
  return (
    <>
        <Navbar />
        <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",width:"70vw" }}>
          <h1>Dashboard</h1>
          <div style={{backgroundColor:"white",padding:"1rem",width:"47%",height:"65vh", float:"left"}}>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>Progress Chart</div><br/>
            <div>Each test given is examined on the basis of 6 parameters. These parameters should be worked upon separately. To understand the areas which require work, you can check your progress. This chart analysis displays your journey by comparing your results throughout. You can choose to compare test-wise by only selecting the legends you wish to view and compare.</div><br/>
            <Chart/>
          </div>
          <div style={{backgroundColor:"white",padding:"1rem",width:"44%",height:"65vh", float:"right"}}>
            
          </div>
        </div>
        </Holder>
    </>
  );
}

export default Dashboard;