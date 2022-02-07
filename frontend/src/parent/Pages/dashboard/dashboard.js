import React, {useState,useEffect} from 'react';
import './dash.styles.css';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Chart from './dchart'
import styled from "styled-components";
import {useAuth,authFetch, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;

function Dashboard() {
	const [logged] = useAuth();
	const access = getSessionState();
  const [schedule, setschedule] = useState([]);

  const makelist = (a)=>{
    var list = []
    for (var i = 0; i < a.length; i++) {
      let opts = {
        'title': a[i]['name'],
        'has_attempted': a[i]['has_attempted'],
        'date': a[i]['date'],
      }
      list.push(opts)
  }
    setschedule(list);
  }

  useEffect(()=>{
    authFetch('/api/get_child_tests',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      console.log(r)
      if(r.data)
      makelist(r.data)
    })
    .catch(error => console.log(error))}, [])
  return (
    <>{logged&&access.type==2?
      <>
        <Navbar />
        <Holder>
        <div>
          <Sidebar />
        </div>
        <div className='main'>
          <h1>Cognition Quotient Report (CQR)</h1>
          <div className='colleft'>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>Progress Chart</div><br/>
            <div>Each test given is examined on the basis of 6 parameters. These parameters should be worked upon separately. To understand the areas which require work, you can check your progress. This chart analysis displays your journey by comparing your results throughout. You can choose to compare test-wise by only selecting the legends you wish to view and compare.</div><br/>
            <Chart/>
          </div>

          <div className='colright'>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>List of tests:</div><br/>
            <div>Here are all the tests you need to study. These are arranged in chronological order. Make sure to attempt all and learn. You only get a window of time to solve a test, but you can submit a token which on approval will allow you to sit for it again.</div>
            <div style={{overflowY:"scroll"}}>
            <div style={{width:"44%",float:"left"}}><h3>Test Name</h3></div>
              <div style={{width:"44%",float:"right"}}><h3>Status</h3></div>
            {schedule.map((item,i)=>(
              <span key={i}>
              <div style={{height:"120px"}}>
              <div style={{padding:"10px 10px",width:"44%",float:"left"}}>{item.title}</div>
              <div style={{width:"44%",float:"right"}}>
                {(item.date == -1) ?
                <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Yet to give </button></>
                :(item.date == 0 && item.has_attempted == 'True')? <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Attempted </button></> 
                : (item.date == 0 && item.has_attempted == 'False')? <><button  className='custom-button' style= {{backgroundColor:"#000000"}}> Can attempt </button> </> 
                : (item.date == 1 && item.has_attempted == 'True')? <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Attempted </button></> 
                : (item.date == 1 && item.has_attempted == 'False')? <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Missed </button></>:<></> }
              </div></div>
              </span>
            ))}
            </div>
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

export default Dashboard;