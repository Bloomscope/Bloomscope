import React,{useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import Popup from 'reactjs-popup';
import data from './data.json';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function StudentData() {
  const [suggestion, setsuggestion] = useState('');
  const [searchTerm,setSearchTerm] = useState('')

  return (
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
                        <ResponsiveContainer width="100%" height="60%">
                          <BarChart
                            width={500}
                            height={200}
                            data={val.test}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="t1" fill="#8884d8" />
                            <Bar dataKey="t2" fill="#82ca9d" />
                            <Bar dataKey="t3" fill="#00000f" />
                            <Bar dataKey="t4" fill="#00f000" />
                          </BarChart>
                        </ResponsiveContainer>
                        <form>
                          <label class="input-text">
                            Send Suggestion : <br/>
                            <input type="text" name="post" value={suggestion} onChange={(e)=>{setsuggestion(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                          <button className='custom-button' type='submit' style={{float:"right"}}>Send</button>
                        </form>
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
  );
}

export default StudentData;