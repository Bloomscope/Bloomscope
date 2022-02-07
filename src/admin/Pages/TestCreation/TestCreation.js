import React,{useState} from 'react';
import './styles.scss';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Parameter from '../../Components/parameters/parameter';
import TabButton from '../../../Register/components/TabButton/TabButton';
import {FaPlus} from "react-icons/fa";
import styled from "styled-components";
import data from './tests.json'

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function TestCreation() {
  const [openbutton, setopenbutton]=useState(false);

  return (
    <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2rem" }}>
        <h1>Test Creation</h1>
        <div style={{padding:"1.8rem",width:"42%",height:"60vh",backgroundColor:"white",float:'left'}}>
          {/* <span>Start Day Number */}
          <form>
              <div style={{width:"45%",float:"left"}}>
             <label> Test Name: 
               <input type='text' />
              </label></div>
              <div style={{width:"45%",float:"right"}}>
              <label> Duration (in hours): 
               <input type='text' />
              </label></div>
              <div style={{width:"45%",float:"left"}}>
             <label> Start Day Number: 
               <input type='text' />
              </label></div>
              <div style={{width:"45%",float:"right"}}>
              <label> End Day Number: 
               <input type='text' />
              </label></div>
          </form>
          <div>
            <TabButton onClick={() => setopenbutton(!openbutton)}>
              <FaPlus className="FaUserGraduate" />
              Add Parameter
            </TabButton>
            <Parameter view={openbutton}/>
          </div>
        </div>
        <div style = {{float:"right",width:"42%",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
          <b>Tests' log:</b>
            <div style={{overflowY:"scroll",height:"58vh"}}>
            {data.map((item,i)=>(
              <span key={i}>
              <p><b>{item.name}</b>: <br/>From Day number {item.from} to {item.to} for {item.duration} hours</p>
              </span>
            ))}
            </div>
        </div>
      </div>
    </Holder></>
  );
}

export default TestCreation;