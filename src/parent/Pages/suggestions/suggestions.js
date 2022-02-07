import React, {useState,useEffect} from 'react';
import './sugg.styles.css';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {authFetch, useAuth, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  } 
`;
function Suggestions() {
	const [logged] = useAuth();
	const access = getSessionState();
  const [suggestions, setsuggestions] = useState([]);

  useEffect(()=>{
    authFetch('/api/get_child_suggestion',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      console.log(r)
      if(r.data)
      setsuggestions(r.data)
    })
    .catch(error => console.log(error))}, [])

  return (
    <>{logged&&access.type==2?
      <>
        <Navbar />
        <Holder>
        <div >
          <Sidebar />
        </div>
        <div className='main'>
        <h1 >Suggestions</h1>
            <div className='sugg'>
            {suggestions.map((item,i)=>(
              <span key={i}>
              <p style={{ borderStyle:"solid", border:"2px black", paddingTop: "15px 10px",fontSize:"1.1rem" }}><b>{item.suggestion_name}</b>: <br/>{item.suggestion}</p>
              </span>
            ))}
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

export default Suggestions;