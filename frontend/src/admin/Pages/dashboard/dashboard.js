import React, {useState, useEffect} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {useAuth, authFetch, getSessionState} from "../../../auth/index"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function ADashboard() {

	const [logged] = useAuth();
	const access = getSessionState();
  const [testData, settestData] = useState([]);
  const [users_registered, setusers_registered] = useState('');
  const [tests, settests] = useState('');
    
    useEffect(()=>{
      authFetch('/api/dashboard',{
        'methods':'GET',
      })
      .then(r => r.json())
      .then((r) => {
        if(r.test_data !== undefined )
        settestData(r.test_data);
        if(r.users_registered !== undefined )
        setusers_registered(r.users_registered);
        if(r.tests !== undefined )
        settests(r.tests);
      })
      .catch(error => console.log(error))})

  return (
    
    <>
     {logged&&access.type===3?
      <>
      <div>
        <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Dashboard</h1>
        <div style = {{float:"left",width:"400px",height:"60vh",backgroundColor:"white", padding:"1.8rem", marginRight:"10px"}}>
          <h3>Tests log:</h3>
            <div style={{overflowY:"scroll",height:"55vh"}}>
            {testData.map((item,i)=>(
              <span key={i}>
              <br/><b>Test Id</b>: {item.test_id}<br/>
              <b>Attempted</b>: {item.attempted}<br/>
              <b>Total Registered</b>: {item.total_registered}<br/>
              {/* //change time */}
              </span>
            ))}
            </div>
          
        </div>
        <div style = {{float:"right",width:"420px",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
          Users registered: {users_registered}<br/>
          Tests: {tests}
        </div>
      </div>
      </Holder>
      </div>
      </>:
	 <>
     <NotLoggedIn/>
	 </>}</>
  );
}

export default ADashboard;