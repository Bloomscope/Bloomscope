import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import data from './announcements.json'
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Announcement() {
  const [title, settitle] = useState('');
  const [post, setpost] = useState('');
  return (
    <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "5rem", paddingTop: "1rem" }}>
        <h1>Announcements</h1>
        <div class="post">
          <form>
            <label class="input-text">
              Title : <br/>
              <input type="text" name="title" value={title} onChange={(e)=>{settitle(e.target.value)}} style={{height:"30px" }}/>
            </label><br/>
            <label class="input-text">
              Post : <br/>
              <input type="text" name="post" value={post} onChange={(e)=>{setpost(e.target.value)}} style={{ height:"150px"}}/>
            </label>
            <CustomButton type='submit' style={{float:"right"}}>POST</CustomButton>
          </form>
        </div>
        <div class='log'>
          <h2>Logs</h2>
            <div>
            {data.map((item,i)=>(
              <span key={i}>
              <p class="logs"><b>{item.title}</b>: {item.post}</p>
              </span>
            ))}
            </div>
        </div>
      </div>
      </Holder>
    </>
  );
}

export default Announcement;