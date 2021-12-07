import React,{useState} from 'react';
import './styles.scss';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Parameter from '../../Components/parameters/parameter';
import TabButton from '../../../Register/components/TabButton/TabButton';
import {FaPlus} from "react-icons/fa";
import styled from "styled-components";
import data from './tests.json'
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import {login, authFetch,useAuth, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function TestCreation() {
  const [openbutton, setopenbutton]=useState(false);

	const [logged] = useAuth();
	const access = getSessionState();
  
  const [list, setList] = useState([]);
  const[parameterNo, setparameterNo] = useState('');
  const[qParameter, setqParameter] = useState('');
  const[testname, settestname] = useState('');
  const[start, setstart] = useState('');
  const[end, setend] = useState('');
  const[duration, setduration] = useState('');

  const handleChange = e =>{
    e.preventDefault()
    setparameterNo(e.target.value)
    setqParameter(e.target.value)
    let data = {
      'id': parameterNo,
      'que': qParameter
    }
    const newList = list.concat(data)
    setList(newList)
    console.log(newList)
    setparameterNo('')
    setqParameter('')
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log("You pressed button")
    // let opts = {
    //   'name': testname,
    //   'parameters': list,
    //   'conducted_on': start,
    //   'ends_on': end,
    //   'durations': duration,
    //   // 'param_id': parameter,
    // }
    // console.log(opts)
    // authFetch('/api/schedule_test', {
    //   method: 'post',
    //   body: JSON.stringify(opts),
    // }).then(r => r.json())
    //   .then(r => {
    //     console.log(r)
    //   })
    //   .catch(error => console.log(error))
    
    // setList([])
    // setparameterNo('')
    // setqParameter('')
    // settestname('')
    // setstart('')
    // setend('')
    // setduration('')
  }

  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2rem" }}>
        <h1>Test Creation</h1>
        <div style={{padding:"1.8rem",width:"30vw",height:"60vh",backgroundColor:"white",float:'left'}}>
        <div style={{overflowY:"scroll",height:"60vh"}}>
          <form onSubmit="">  
          <div style={{width:"47%",float:'left'}}>
          <label class="input-text" style={{fontWeight:"bold"}}>
              Test Name: <br/> 
              <input 
                type="text" 
                name="testname" 
                value={testname}
                onChange={(e)=>{settestname(e.target.value)}}
                style={{width:"90%"}}
              /><br/>
            </label>
            </div>
            <div style={{width:"47%",float:'right'}}>
            <label class="input-text" style={{fontWeight:"bold"}}>
            Duration (in minutes): <br/> 
              <input 
                type="text" 
                name="duration" 
                value={duration}
                onChange={(e)=>{setduration(e.target.value)}}
                style={{width:"90%"}}
              /><br/>
            </label>
            </div>
            <div style={{width:"47%",float:'left'}}>
            <label class="input-text" style={{fontWeight:"bold"}}>
            Start Day Number: <br/> 
              <input 
                type="text" 
                name="start" 
                value={start}
                onChange={(e)=>{setstart(e.target.value)}}
                style={{width:"90%"}}
              /><br/>
            </label>
            </div>
            <div style={{width:"47%",float:'right'}}>
            <label class="input-text" style={{fontWeight:"bold"}}>
            End Day Number: <br/> 
              <input 
                type="text" 
                name="end" 
                value={end}
                onChange={(e)=>{setend(e.target.value)}}
                style={{width:"90%"}}
              /><br/>
            </label></div>

            <div>
             <form>
             <div style={{width:"47%",float:'left'}}>
             <label style={{fontWeight:"bold"}}> Parameter No: <br/>
             <input 
                type="text"
                name="parameterNo"
                value={parameterNo}
                style={{width:"90%"}}
                onChange = {(e)=>{setparameterNo(e.target.value)}}
                // required
                />
             </label></div> <br/> 
             <div style={{width:"47%",float:'right'}}>            
             <label style={{fontWeight:"bold"}}> No. of questions: <br/>
             <input 
                type="text" 
                name="qParameter" 
                value={qParameter} 
                style={{width:"90%"}}
                onChange = {(e)=>{setqParameter(e.target.value)}}
             />
             </label></div> <br/>
                
            <CustomButton 
            type="submit" 
            onClick={handleChange}
            style={{margin:"20px 0px 20px -4px"}}>
            Add
            </CustomButton>
             </form>

             <div>
              <span><b>Test Name:</b> {testname}</span><br/>
                <span><b>Duration:</b> {duration}</span><br/>
              <span><b>Starts on:</b> {start}</span><br/>
                <span><b>Ends on:</b> {end}</span><br/>
                <span><b> Parameters: </b><br/>
                {list.map((item,i)=>(
                  <span key={i}>
                  <span>{item.id}: {item.que}</span><br/>
                  </span>
                ))}
                </span>
            </div>

            </div>
            <CustomButton 
            type="submit" 
            onClick={handleSubmit} 
            style={{margin:"30px 0px 0px -4px"}}>
            ADD QUESTION
            </CustomButton>
          </form></div>

          
        </div>
        <div style = {{float:"right",width:"30vw",height:"60vh",backgroundColor:"white", padding:"1.8rem", marginLeft: "2vw"}}>
          <b>Tests' log:</b>
            <div style={{overflowY:"scroll",height:"58vh"}}>
            {data.map((item,i)=>(
              <span key={i}>
              <p><b>{item.name}</b>: <br/>From Day number {item.from} to {item.to} for {item.duration} hours</p>
              </span>
            ))}
            </div>
        </div>
      </div>
    </Holder></>
	:
	<>
    <NotLoggedIn/>
	</>}</>
  );
}

export default TestCreation;