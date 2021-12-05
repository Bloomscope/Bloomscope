import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {login, useAuth, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import tokens from "./tests.json"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Token() {
  const [logged] = useAuth();
	const access = getSessionState();
  // const [tokens, settokens] = useState([]);
  
  // useEffect(()=>{
  //   authFetch('/api/get_tokens',{
  //     'methods':'GET',
  //   })
  //   .then(r => r.json())
  //   .then((r) => {
  //     // console.log(r)
  //     if(r.tokens !== undefined )
  //     setannouncements(r.tokens);
  //   })
  //   .catch(error => console.log(error))})

  const approve = (e)=>{
    e.preventDefault()
    //approve
  }
  const disapprove = (e)=>{
    e.preventDefault()
    //disapprove
  }

  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Token Verification</h1>
        <div style = {{float:"left",width:"67vw",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
        <div style={{overflowY:"scroll",height:"58vh"}}>
            {tokens.map((item,i)=>(
              <span key={i}>
              <div style = {{float:"left",width:"35vw"}}><p><b>{item.fname} {item.lname}</b>: ({item.created_on}) <br/>{item.test_name} - {item.reason}</p> </div>
              <div style = {{float:"right",width:"25vw", paddingTop: "1.1rem"}}><button onClick={approve} className='custom-button'> Approve </button><button onClick={disapprove} className='custom-button'> Disapprove </button> </div>
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

export default Token;