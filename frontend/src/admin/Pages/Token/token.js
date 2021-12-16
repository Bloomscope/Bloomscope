import React, {useState,useEffect} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {login,authFetch, useAuth, logout,getSessionState} from "../../../auth"
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
  const [tokens, settokens] = useState([]);
  
  useEffect(()=>{
    authFetch('/api/get_all_tokens',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      // console.log(r)
      if(r.tokens !== undefined )
      settokens(r.tokens);
    })
    .catch(error => console.log(error))})

    const approve = (e,test_id,user_id)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'user_id': user_id,
        'test_id': test_id,
        'action': "approved",
      }
      console.log(opts)
      authFetch('/api/update_token', {
        method: 'post',
        body: JSON.stringify(opts),
      }).then(r => r.json())
        .then(r => {
          if(r.status == 'success')
          console.log(r)
          else
          console.log(r)
          // setannouncements(announcements)
        })
        .catch(error => console.log(error))
      return false;
    }

    const disapprove = (e,test_id,user_id)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'user_id': user_id,
        'test_id': test_id,
        'action': "rejected",
      }
      console.log(opts)
      authFetch('/api/update_token', {
        method: 'post',
        body: JSON.stringify(opts),
      }).then(r => r.json())
        .then(r => {
          if(r.status == 'success')
          console.log(r)
          else
          console.log(r)
          // setannouncements(announcements)
        })
        .catch(error => console.log(error))
      return false;
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
              <>
              {
                (item.status == "Pending")?
                <span key={i}>
              <div style = {{float:"left",width:"35vw"}}><p><b>User id: {item.user_id}</b>: ({item.created_on}) <br/>Test id: {item.test_id} - {item.reason}</p> </div>
              <div style = {{float:"right",width:"25vw", paddingTop: "1.1rem"}}>
                <button onClick={(e)=>approve(e,item.test_id,item.user_id)} className='custom-button'> Approve </button>
                <button onClick={(e)=>disapprove(e,item.test_id,item.user_id)} className='custom-button'> Disapprove </button> 
              </div>
              </span>
                :<></>
              }
              </>
              
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