import React, {useState, useEffect} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import styled from "styled-components";
import {useAuth, authFetch, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Announcement() {

	const [logged] = useAuth();
	const access = getSessionState();
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const [announcements, setannouncements] = useState([]);
  
  useEffect(()=>{
    authFetch('/api/get_announcements',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      if(r.announcements !== undefined )
      setannouncements(r.announcements);
    })
    .catch(error => console.log(error))})

  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed button")
    let opts = {
      'title': title,
      'content': content,
    }
    console.log(opts)
    authFetch('/api/create_announcement', {
      method: 'post',
      body: JSON.stringify(opts),
    }).then(r => r.json())
      .then(r => {
        if(r.status == 'success')
        console.log(r.announcement_id)
        else
        console.log(r)
        // setannouncements(announcements)
      })
      .catch(error => console.log(error))
      settitle('')
      setcontent('')
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
              <input type="text" name="content" value={content} onChange={(e)=>{setcontent(e.target.value)}} style={{ height:"30px"}}/>
            </label>
            <CustomButton type='submit' onClick={onSubmitClick} style={{float:"right"}}>POST</CustomButton>
          </form>
        </div>
        <div style = {{float:"right",width:"42%",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
          <b>Announcements log:</b>
            <div style={{overflowY:"scroll",height:"58vh"}}>
            {announcements.map((item,i)=>(
              <span key={i}>
              <p><b>{item.title}</b>: ({item.announced_on}) <br/>{item.content}</p> 
              {/* //change time */}
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

export default Announcement;