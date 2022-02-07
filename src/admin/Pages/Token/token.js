import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Token() {
//   const [title, settitle] = useState('');
//   const [post, setpost] = useState('');
  return (
    <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Token Verification</h1>
        <div style = {{float:"left",width:"67vw",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
         </div>
      </div>
      </Holder>
    </>
  );
}

export default Token;