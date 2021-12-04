import React,{useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import data from './data.json';
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import {login, useAuth, logout,getSessionState} from "../../../auth"
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
          {data.filter((val)=>{
            if(searchTerm == ""){
              return val
            }
            else if(val.firstname.toLowerCase().includes(searchTerm.toLowerCase())||val.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val,id)=>{
            return (
              <div className = 'row'>
                <div className = 'col1' style = {{paddingTop: '7%'}}>{val.firstname} {val.lastname}</div>
                <div className = 'col2' style = {{paddingTop: '7%'}}>{val.organisation}</div>
                <div className = 'col3' style = {{paddingTop: '7%'}}>{val.subscribedOn}</div>
                <div className = 'col4'>
                  <Popup modal trigger={<button className='custom-button'> Details </button>}>
                      <div className="popup" style = {{overflowY:'scroll'}}>
                        Id: {val.id}<br/>
                        Student name: {val.firstname} {val.lastname} <br/>
                        Contact: {val.phone}/{val.email}<hr/>
                        <Bar data={{
                                      labels: ["Parameter 1", "Parameter 2", "Parameter 3", "Parameter 4", "Parameter 5", "Parameter 6"],
                                      datasets: [val.test.result].flat()
                                  }} 
                        style={{width:"20vw",height:"45vh"}} 
                        options={options} />
                        <br/>
                        <form>
                          <label class="input-text">
                            Send Suggestion : <br/>
                            <input type="text" name="post" value={suggestion} onChange={(e)=>{setsuggestion(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                          <button className='custom-button' type='submit' style={{float:"right"}}>Send</button>
                        </form><br/>
                      </div>
                  </Popup>
                </div>
                <br/>
              </div>
            );
          })}
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