import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {login, useAuth, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import Option from '../../Components/options/options';

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function AddQuestions() {
//   const [title, settitle] = useState('');
//   const [post, setpost] = useState('');
  const[question, setquestion] = useState('');
  const[answer, setanswer] = useState('');
  const[explanation, setexplanation] = useState('');
  const[parameter, setparameter] = useState('');
  
	const [logged] = useAuth();
	const access = getSessionState();
  return (
    // <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Add Questions</h1>
        <div style = {{float:"left",width:"67vw",height:"75vh",backgroundColor:"white", padding:"1.8rem"}}>
         <div style={{width:"50%", float:"left"}}>
          <form onSubmit="">  
          <label class="input-text" style={{fontWeight:"bold"}}>
              Question: <br/> 
              <input 
                type="text" 
                name="question" 
                value={question}
                onChange={(e)=>{setquestion(e.target.value)}}
                style={{width:"500px"}}
              /><br/>
            </label>
            
            <Option/>
           
            <label class="input-text" style={{fontWeight:"bold"}}> Answer: <br/>
            <input 
              type="text"  
              name="answer" 
              value = {answer}
              style={{width:"500px"}}
              onChange={(e)=>{setanswer(e.target.value)}}
            />
            </label><br/>
            <label class="input-text" style={{fontWeight:"bold"}}> Explanation: <br/>
            <input 
              type="text"  
              name="explanation" 
              value = {explanation}
              style={{width:"500px"}}
              onChange={(e)=>{setexplanation(e.target.value)}}
            /></label><br/>
            <label class="input-text" style={{fontWeight:"bold"}}> Parameter: <br/>
            <input 
              type="text"  
              name="parameter" 
              value={parameter}
              style={{width:"500px"}}
              onChange={(e)=>{setparameter(e.target.value)}}
            /></label><br/>
          </form>
          </div>
          <div style={{width:"50%", float:"left"}}>
            <span style={{width:"100px"}}>Question: {question}</span><br/>
            <span>Answer: {answer}</span><br/>
            <span>Explanation: {explanation}</span><br/>
            <span>Parameter: {parameter}</span><br/>
            <CustomButton type="submit">ADD QUESTION</CustomButton>
          </div>
        </div>
      </div>
      </Holder>
    </>
	// :
	// <>
  //   <NotLoggedIn/>
	// </>}</>
  );
}

export default AddQuestions;