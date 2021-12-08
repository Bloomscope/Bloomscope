import React,{useState,useEffect} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import data from './data.json';
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import {login, useAuth,authFetch, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

  const options = {
    type: 'bar',
    legend: {
      position: "top",
      labels: {
        generateLabels: function(chart) {
          return Chart.defaults.global.legend.labels.generateLabels
            .apply(this, [chart])
            .filter(function(item, i) {
              return i > 4;
            });
        },
        boxWidth: 8,
        usePointStyle: true
      }
    }
  };

  

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function StudentData() {
	const [logged] = useAuth();
	const access = getSessionState();
  const [suggestion, setsuggestion] = useState('');
  const [searchTerm,setSearchTerm] = useState('')
  const [title,settitle] = useState('')
  const [slist, setslist] = useState([]);

  
  
  useEffect(()=>{
    authFetch('/api/get_users',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      // console.log(r)
      if(r.data)
      setslist(r.data);
    })
    .catch(error => console.log(error))})


    const func = (id)=>{
      
    // e.preventDefault();
    // e.stopPropagation();
      console.log("You pressed button")
      console.log(id)
      let opts = {
        'student_id': id,
        'suggestion': suggestion,
        'suggestion_name': title,
        'param_id': 1,
      }
      console.log(opts)
      authFetch('/api/add_suggestions', {
        method: 'post',
        body: JSON.stringify(opts),
      }).then(r => r.json())
        .then(r => {
          console.log(r)
        })
        .catch(error => console.log(error))
        settitle('')
        setsuggestion('')
        return false
    }

  return (
    <>{logged&&access.type==3
      ?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",width:"70vw" }}>
        <div>
          <h1><b>Student Data</b></h1>
          <div style={{ backgroundColor:"white", padding:"0.8rem 2rem" }}>
          <div className = 'row'>
                <div className = 'col1'><h3>Name</h3></div>
                <div className = 'col2'><h3>Organisation</h3></div>
                <div className = 'col3'><h3>Registered on</h3></div>
                <div className = 'col4'><input style={{backgroundColor:"#ffffff"}} type="text" placeholder="Seach Name" onChange={e=>setSearchTerm(e.target.value)} /></div>
          </div>
          <hr/>

          <div style = {{overflowY:'scroll', height:'55vh'}}>
          {data.map((val,id)=>{
            return (<>
          {slist.filter((val)=>{
            if(searchTerm == ""){
              return val
            }
            else if(val.fname.toLowerCase().includes(searchTerm.toLowerCase())||val.mname.toLowerCase().includes(searchTerm.toLowerCase())||val.lname.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val,id)=>{
            return (
              <div className = 'row'>
                <div className = 'col1' style = {{paddingTop: '7%'}}>{val.fname} {val.mname} {val.lname}</div>
                <div className = 'col2' style = {{paddingTop: '7%'}}>Self</div>
                <div className = 'col3' style = {{paddingTop: '7%'}}>{val.registered_on}</div>
                <div className = 'col4'>
                  <Popup modal trigger={<button className='custom-button'> Details </button>}>
                      <div className="popup" style = {{overflowY:'scroll'}}>
                        Id: {val.id}<br/>
                        Student name: {val.fname} {val.mname} {val.lname} <br/>
                        Contact: {val.phone}/{val.email}<hr/>
                        <Bar data={{
                                      labels: ["Parameter 1", "Parameter 2", "Parameter 3", "Parameter 4", "Parameter 5", "Parameter 6"],
                                      datasets: [data.test.result].flat()
                                  }} 
                        style={{width:"20vw",height:"45vh"}} 
                        options={options} />
                        <br/>
                        <form>
                          <label class="input-text">
                          Send Suggestion : <br/>Title : <br/>
                            <input type="text" name="post" value={title} onChange={(e)=>{settitle(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                          <label class="input-text">
                            Suggestion : <br/>
                            <input type="text" name="post" value={suggestion} onChange={(e)=>{setsuggestion(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                          <button onClick={()=>func(val.id)} className='custom-button' type='button' style={{float:"right"}}>Send</button>
                        </form><br/>
                      </div>
                  </Popup>
                </div>
                <br/>
              </div>
            );
          })}</>)})}
          </div></div>
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

export default StudentData;