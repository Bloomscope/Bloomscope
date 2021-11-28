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
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Announcements</h1>
        <div style = {{float:"left",width:"42%",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
          <div>
          You can post announcements to your class on the class stream. Announcements are posts with no assignments. You can use them to give notices or reminders to your students. Announcements appear in chronological order. The date and time are automatically noted so to post an announcement, enter the title and the content of your announcement. 
          </div>
          <br/>
          <form>
            <label class="input-text" style={{fontWeight:"bold"}}>
              Title : <br/>
              <input type="text" name="title" value={title} onChange={(e)=>{settitle(e.target.value)}} style={{height:"30px" }}/>
            </label><br/>
            <label class="input-text" style={{fontWeight:"bold"}}>
              Post : <br/>
              <input type="text" name="post" value={post} onChange={(e)=>{setpost(e.target.value)}} style={{ height:"30px"}}/>
            </label>
            <CustomButton type='submit' style={{float:"right"}}>POST</CustomButton>
          </form>
        </div>
        <div style = {{float:"right",width:"42%",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
          <b>Announcements log:</b>
            <div style={{overflowY:"scroll",height:"58vh"}}>
            {data.map((item,i)=>(
              <span key={i}>
              <p><b>{item.title}</b>: ({item.time}) <br/>{item.post}</p>
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