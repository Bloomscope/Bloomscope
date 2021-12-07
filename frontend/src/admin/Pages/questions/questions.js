import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {login, useAuth,authFetch, logout,getSessionState} from "../../../auth"
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
  const[marks, setmarks] = useState('');
  
 
  const handleChange = e =>{
    e.preventDefault()
    setoptionName(e.target.value)
    setcontentType(e.target.value)
    setcontent(e.target.value)
    let data = {
      // 'id': uuidv4(),
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

    e.preventDefault()
    console.log("You pressed button")
    let opts = {
      'question': question,
      'options': list,
      'ans': answer,
      'explanation': explanation,
      'marks': marks,
      'param_id': parameter,
    }
    console.log(opts)
    authFetch('/api/add_question', {
      method: 'post',
      body: JSON.stringify(opts),
    }).then(r => r.json())
      .then(r => {
        console.log(r)
        // setannouncements(announcements)
      })
      .catch(error => console.log(error))
    //send data to the db
    setList([])
    setanswer('')
    setquestion('')
    setquestionType('')
    setcontent('')
    setcontentType('')
    setparameter('')
    setexplanation('')
    setmarks('')
  }

  const handleFileUpload = e => {
    // const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onload = (evt) => {
    //   const bstr = evt.target.result;
    //   console.log(bstr)
    //   // e.preventDefault()
    // console.log("You pressed button")
    // authFetch('/api/add_questions', {
    //   method: 'post',
    //   body: file,
    // }).then(r => r.json())
    //   .then(r => {
    //     console.log(r)
    //     // setannouncements(announcements)
    //   })
    //   .catch(error => console.log(error))
    // };
    // try{
    //   reader.readAsBinaryString(file);
    // }
    // catch(e){
    //   console.log(e)
    // } 
  }

  console.log(list)
  console.log(optionName)
  console.log(contentType)
	const [logged] = useAuth();
	const access = getSessionState();

  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Add Questions</h1>
        <div style = {{float:"left",width:"36vw",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
         <div style={{overflowY:"scroll",height:"58vh"}}>
          <form onSubmit="">  
          <label class="input-text" style={{fontWeight:"bold"}}>
              Question: <br/> 
              <input 
                type="text" 
                name="question" 
                value={question}
                onChange={(e)=>{setquestion(e.target.value)}}
                style={{width:"90%"}}
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
                style={{width:"90%"}}
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
                style={{width:"90%"}}
                onChange = {(e)=>{setcontent(e.target.value)}}
             />
             </label> <br/>
                
            <CustomButton 
            type="submit" 
            onClick={handleChange}
            style={{margin:"20px 0px 20px -4px"}}>
            Add
            </CustomButton>
             </form>
                
            </div>
            <label class="input-text" style={{fontWeight:"bold"}}> Answer: <br/>
            <input 
              type="text"  
              name="answer" 
              value = {answer}
              style={{width:"90%"}}
              onChange={(e)=>{setanswer(e.target.value)}}
            />
            </label><br/>
            <label class="input-text" style={{fontWeight:"bold"}}> Explanation: <br/>
            <input 
              type="text"  
              name="explanation" 
              value = {explanation}
              style={{width:"90%"}}
              onChange={(e)=>{setexplanation(e.target.value)}}
            /></label><br/>
            <label class="input-text" style={{fontWeight:"bold"}}> Parameter: <br/>
            <input 
              type="text"  
              name="parameter" 
              value={parameter}
              style={{width:"90%"}}
              onChange={(e)=>{setparameter(e.target.value)}}
            /></label><br/>
            <label class="input-text" style={{fontWeight:"bold"}}> Marks: <br/>
            <input 
              type="text"  
              name="marks" 
              value={marks}
              style={{width:"90%"}}
              onChange={(e)=>{setmarks(e.target.value)}}
            /></label><br/>
          </form>
          </div>
          </div>
          <div style = {{float:"right",width:"50vh",height:"60vh",backgroundColor:"white", padding:"1.8rem", marginLeft: "20px"}}>
          <div class="question" style={{overflowY:"scroll", overflowX:"inherit",height:"58vh"}}>
            <span><b>Question:</b> {question}</span><br/>
            <span><b>Question Type:</b> {questionType}</span><br/>
            <span><b> Options: </b><br/>
            {list.map((item,i)=>(
              <span key={i}>
              <span>{item.opt}: {item.value}</span><br/>
              </span>
            ))}
            </span><br/>
            <span><b>Answer:</b> {answer}</span><br/>
            <span><b>Explanation:</b> {explanation}</span><br/>
            <span><b>Parameter:</b> {parameter}</span><br/>
            <span><b>Marks:</b> {marks}</span><br/>
            <CustomButton 
            type="submit" 
            onClick={handleSubmit} 
            style={{margin:"30px 0px 0px -4px"}}>
            ADD QUESTION
            </CustomButton><br/><br/>
            <label class="custom-file-upload">
          <input
            type="file"
            accept=".json"
            onChange={handleFileUpload}
            // onClick = {(e)=>{updatedmsg('Uploading')}}
          />
          Custom Upload
      </label>
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

export default AddQuestions;