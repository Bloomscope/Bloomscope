import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {login, useAuth, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import { v4 as uuidv4 } from 'uuid';

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
  const [optionName, setoptionName]=useState('');
  const [content, setcontent]=useState('');
  const [contentType, setcontentType]=useState('');
  const [questionType, setquestionType] = useState('');
  
  const [list, setList] = useState([]);
  const[question, setquestion] = useState('');
  const[answer, setanswer] = useState('');
  const[explanation, setexplanation] = useState('');
  const[parameter, setparameter] = useState('');
  
 
  const handleChange = e =>{
    e.preventDefault()
    setoptionName(e.target.value)
    setcontentType(e.target.value)
    setcontent(e.target.value)
    let data = {
      'id': uuidv4(),
      'opt': optionName,
      'value': content,
      'opt_type': contentType
    }
   
    const newList = list.concat(data)
    setList(newList)
    setoptionName('')
    setcontentType('')
    setcontent('')
        //add form input to json
  }

  const handleSelect = e => {
    e.preventDefault()
    setcontentType(e.target.value)
  }
  const handleSelect2 = e => {
    e.preventDefault()
    setquestionType(e.target.value)
  }
  
  
  const handleSubmit = (e) => {
    //send data to the db
    setList([])
    setanswer('')
    setquestion('')
    setquestionType('')
    setcontent('')
    setcontentType('')
  }
  console.log(list)
  console.log(optionName)
  console.log(contentType)
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
            <label style={{fontWeight:"bold"}}> Question Type Type: <br/>
             <select  value={questionType} onChange={handleSelect2}>
                <option value="string">String</option>
                <option value="url">Url</option>
            </select><br/>
             </label> 
            <div>
             <form>
             <label style={{fontWeight:"bold"}}> Option Name: <br/>
             <input 
                type="text"
                name="optionName"
                value={optionName}
                style={{width:"500px"}}
                onChange = {(e)=>{setoptionName(e.target.value)}}
                // required
                />
             </label> <br/>
             
             <label style={{fontWeight:"bold"}}> Content Type: <br/>
             <select  value={contentType} onChange={handleSelect}>
                <option value="string">String</option>
                <option value="url">Url</option>
            </select><br/>
             </label> 
             
             <label style={{fontWeight:"bold"}}> Content: <br/>
             <input 
                type="text" 
                name="content" 
                value={content} 
                style={{width:"500px"}}
                onChange = {(e)=>{setcontent(e.target.value)}}
             />
             </label> 
                
            <CustomButton type="submit" onClick={handleChange}>Add</CustomButton>
             </form>
                
            </div>
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
            <span>Question: {question}</span><br/>
            <span>Question Type: {questionType}</span><br/>
            <span>
            {list.map((item,i)=>(
              <span key={i}>
              <span>{item.opt}: {item.value}</span><br/>
              </span>
            ))}
            </span><br/>
            <span>Answer: {answer}</span><br/>
            <span>Explanation: {explanation}</span><br/>
            <span>Parameter: {parameter}</span><br/>
            <CustomButton type="submit" onClick={handleSubmit}>ADD QUESTION</CustomButton>
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