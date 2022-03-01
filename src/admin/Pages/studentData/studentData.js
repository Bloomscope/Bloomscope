import React,{useState,useEffect} from 'react';
import './studentdata.styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import datas from './data.json';
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import {useAuth,authFetch, getSessionState} from "../../../auth"
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
  
    const CHART_COLORS = [
      "#0090f8",
      // "#33a6f9",
      "#66bcfb",
      // "#8ccdfc",
      "#b2defd",
      "#d9eefe",
      "#fde76e",
      "#fced86",
      "#ffffb7",
      "#fefeeb"
    ];

  const alltests = datas.result.map(
    (i, index) => {
      return {
        label: i.label,
        backgroundColor: CHART_COLORS[index],
        data: i.data,
      };
    }
  );


  const newdataset = [alltests];
  const dt = newdataset.flat();

  const data = {
    labels: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"],
    datasets: dt
  };
  
  useEffect(()=>{
    authFetch('/api/get_users',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      console.log(r)
      if(r.data)
      setslist(r.data);
    })
    .catch(error => console.log(error))}, []);


    const func = (id)=>{
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
        <div>
          <Sidebar />
        </div>
        <div className='main'>
        <div>
          <h1 className='show'><b>Student Data</b></h1>
          <div className='sd' style={{ backgroundColor:"white", padding:"0.8rem 2rem" }}>
          <div className = 'row'>
                <div className = 'col1' style = {{fontWeight:'600'}}>Name</div>
                <div className = 'col2' style = {{fontWeight:'600'}}>Grade</div>
                <div className = 'col3' style = {{fontWeight:'600'}}>Registered on</div>
                <div className = 'col4'><input style={{backgroundColor:"#ffffff"}} type="text" placeholder="Seach Name" onChange={e=>setSearchTerm(e.target.value)} /></div>
          </div>
          <hr/>

          <div className='list' >
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
                <div className = 'col1'>{val.fname} {val.mname} {val.lname}</div>
                <div className = 'col2'>{val.grades_id}</div>
                <div className = 'col3'>{val.registered_on}</div>
                <div className = 'col4'>
                  <Popup modal trigger={<button className='custom-button'> Details </button>}>
                      <div className="popup" style = {{overflowY:'scroll'}}>
                        <div class="temp3 temp2">
                          <b>Id : </b>{val.id}<br/>
                          <b>Student name :</b> {val.fname} {val.mname} {val.lname} <br/>
                          <b>Contact: </b>{val.phone} / {val.email}
                        </div>
                        
                        <Bar data={data} 
                        style={{width:"20vw",height:"45vh", marginTop:"10vh"}} 
                        options={options} /> 
                        <br/>
                        <form class="suggestion">
                        <span class="temp">Send Suggestion  <br/><br/></span>
                          <label class="input-text temp2"> Title : 
                          <input type="text" name="post" value={title} onChange={(e)=>{settitle(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                          <label class="input-text temp2">
                            Suggestion :<br/>
                            <input type="text" name="post" value={suggestion} onChange={(e)=>{setsuggestion(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                    
                            
                          <button onClick={()=>func(val.id)} className='custom-button' type='button' style={{float:"right"}}>Send</button>
                        </form><br/><br/><br/>
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