import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
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

function MassRegistration() {
  const [file, setFile] = useState(''); 
  const [msg,updatedmsg] = useState('');   

  const handleFileUpload = e => {
    updatedmsg('')
    const file = e.target.files[0]; 
    console.log(file);
    setFile(file);

    const formData = new FormData();        
    formData.append('file', file);

    authFetch('/api/mass_register',{
          method:'post',
          body: formData,
        })
        .then(r => r.json())
        .then((r) => {
          console.log(r)
          updatedmsg(r.msg)
        })
        .catch(error => console.log(error))
  }
	const [logged] = useAuth();
	const access = getSessionState();

  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem" }}>
			<h1>Mass Registration</h1>
      <div style={{ backgroundColor:"white",padding: "1rem 1rem" , width:"70vw", height:"65vh" }}>
      <label className="custom-file-upload">
          <input
            type="file"
            accept=".json"
            onChange={handleFileUpload}
          />
          Custom Upload
      </label><button className="custom-file-upload" style={{backgroundColor:"white",borderRadius:"0px",color:"black"}}><a target="_blank" style={{color:"black"}} href='https://docs.google.com/spreadsheets/d/1ykzb-h-fZYYRwrR0zV5_fk4UKEmBjeMuFvz_qxTB9zg/edit?usp=sharing'>Download Template</a></button><br/>
      {(msg!=="")?<div className="message">{msg}</div>:<></>}
		</div></div>
    </Holder>
    </>
	:
	<>
    <NotLoggedIn/>
	</>}</>
  );
}

export default MassRegistration;