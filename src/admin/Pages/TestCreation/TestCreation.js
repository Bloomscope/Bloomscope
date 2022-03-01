import React,{useState} from 'react';
import './styles.scss';
import 'react-dropdown/style.css'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import {authFetch,useAuth, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function TestCreation() {
	const [logged] = useAuth();
	const access = getSessionState();
  
  const [list, setList] = useState([]);
  const[parameterNo, setparameterNo] = useState('');
  const[grade, setgrade] = useState('');
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
    e.preventDefault()
    console.log("You pressed button")
    let opts = {
      'grade': parseInt(grade),
      'test_name': testname,
      'parameters': list,
      'conducted_on': start,
      'ends_after': end,
      'duration': duration,
    }
    console.log(opts)
    authFetch('/api/schedule_test', {
      method: 'post',
      body: JSON.stringify(opts),
    }).then(r => r.json())
      .then(r => {
        console.log(r)
      })
      .catch(error => console.log(error))
    
    setList([])
    setparameterNo('')
    setqParameter('')
    settestname('')
    setstart('')
    setend('')
    setduration('')
    setgrade('')
  }

  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div>
          <Sidebar />
        </div>
        <div className='main'>
        <h1>Test Creation</h1>
        <div className='colleft'>
         <div>
          <form onSubmit="">  
          <label class="input-text" style={{fontWeight:"bold"}}>
              Grade (1,2,3..): <br/> 
              <input 
                type="text" 
                name="question" 
                value={grade}
                onChange={(e)=>{setgrade(e.target.value)}}
                style={{width:"95%"}}
              /><br/>
            </label>
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
              <h4>Add Parameters</h4>
              <div style={{backgroundColor: "#d4efff", paddingLeft:"4%", paddingRight:"4%", paddingTop:"7%", borderRadius:"2%"}}>
              <div  style={{fontWeight:"bold"}}>List of parameter IDs</div>
              <div >1. Remember</div>
              <div>2. Understand</div>
              <div>3. Apply</div>
              <div>4. Analyze</div>
              <div>5. Evaluate</div>
              <div>6. Create</div><br/>
             <form>
             <div style={{width:"47%",float:'left'}}>
             <label style={{fontWeight:"bold"}}> Parameter ID: <br/>
             <input 
                type="text"
                name="parameterNo"
                value={parameterNo}
                style={{width:"90%"}}
                onChange = {(e)=>{setparameterNo(e.target.value)}}
                // required
                />
             </label></div> 
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
            </div></div>
          </form></div>

          
        </div>
        <div className='colright'>
          <div>
          <span><b>Grade:</b> {grade}</span><br/>
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
            <CustomButton 
            type="submit" 
            onClick={handleSubmit} 
            style={{margin:"30px 0px 0px -4px"}}>
            ADD TEST
            </CustomButton>
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