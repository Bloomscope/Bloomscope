import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import {useAuth,authFetch, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
// import template from './template.json';
import { CSVReader } from 'react-papaparse';


const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const buttonRef = React.createRef();

function AddQuestions() {
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
  const[file, setFile] = useState('');


  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (fullData) => {
    console.log(fullData);
    var questions = []
    for(var i = 1; i < fullData.length ; i++){
      var data = fullData[i]["data"];
      var options = []
      for(var j = 7 ; j < data.length ; j+=3){
        if(data[j] == "")
        continue;
        let opt = {
          "opt": data[j], 
          "value": data[j+1],  
          "opt_type": data[j+2] 
        };
        options.push(opt)
      }
      let ques = {
        // "grade": data[i][0],
        "question": {
         "value": data[1],
         "question_type": data[2]
        },
        "options": options,
        "ans": data[3],
        "explanation": data[4],
        "param_id": parseInt(data[5]),
        "marks": parseInt(data[6])
      }
      questions.push(ques)
    }
    var d = JSON.stringify({
      "data": questions
    })
    authFetch('/api/add_questions', {
      method: 'post',
      body: JSON.stringify(d),
    }).then(r => r.json())
      .then(r => {
        console.log(r)
      })
      .catch(error => console.log(error))
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
    alert(err)
  };

  const handleChange = e =>{
    e.preventDefault()
    setoptionName(e.target.value)
    setcontentType(e.target.value)
    setcontent(e.target.value)
    let data = {
      'opt': optionName,
      'value': content,
      'opt_type': contentType
    }
   
    const newList = list.concat(data)
    setList(newList)
    setoptionName('')
    setcontentType('')
    setcontent('')
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
      'question_type': questionType,
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
      })
      .catch(error => console.log(error))
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
    const file = e.target.files[0];
    console.log(file);
    setFile(file);

    const formData = new FormData();        
    formData.append('file', file);

    authFetch('/api/add_questions',{
          method:'post',
          body: formData,
        })
        .then(r => r.json())
        .then((r) => {
          console.log(r)
        })
        .catch(error => console.log(error))
  }
	const [logged] = useAuth();
	const access = getSessionState();
  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div >
          <Sidebar />
        </div>
        <div className='main'>
        <h1>Add Questions</h1>
        <div className='colleft'>
         <div style={{height:"58vh"}}>
          <form onSubmit="">  
          <label style={{fontWeight:"bold"}}> Question Type: <br/>
             <select  value={questionType} onChange={handleSelect2}>
                <option value="str">String</option>
                <option value="url">Url</option>
            </select><br/>
             </label> 
          <label class="input-text" style={{fontWeight:"bold"}}>
              Question: <br/> 
              <input 
                type="text" 
                name="question" 
                value={question}
                onChange={(e)=>{setquestion(e.target.value)}}
                style={{width:"95%"}}
              /><br/>
            </label>
            
            <div>
             <form class="optionadd"> 
             <label style={{fontWeight:"bold"}}> Option Name: <br/>
             <input 
                type="text"
                name="optionName"
                value={optionName}
                style={{width:"95%"}}
                onChange = {(e)=>{setoptionName(e.target.value)}}
                // required
                />
             </label> <br/>
             <div style={{width:"30%",float:'left'}}>
              <label style={{fontWeight:"bold"}}> Content Type: <br/>
              <select  value={contentType} onChange={handleSelect}>
                  <option value="str">String</option>
                  <option value="url">Url</option>
              </select><br/>
              </label> 
             </div>
             
             <div style={{width:"60%",float:'right'}}>
              <label style={{fontWeight:"bold"}}> Content: <br/>
              <input 
                  type="text" 
                  name="content" 
                  value={content} 
                  style={{width:"90%"}}
                  onChange = {(e)=>{setcontent(e.target.value)}}
              />
              </label> <br/>
             </div>
             
                
            <CustomButton 
            type="submit" 
            onClick={handleChange}
            style={{margin:"20px 0px 15px 0px"}}>
            Add
            </CustomButton>
             </form>
                
            </div>
            <div style={{width:"47%",float:'left'}}>
            <label class="input-text" style={{fontWeight:"bold"}}> Answer: <br/>
            <input 
              type="text"  
              name="answer" 
              value = {answer}
              style={{width:"95%"}}
              onChange={(e)=>{setanswer(e.target.value)}}
            />
            </label>
            </div>
            <div style={{width:"47%",float:'right'}}>
            <label class="input-text" style={{fontWeight:"bold"}}> Marks: <br/>
            <input 
              type="text"  
              name="marks" 
              value={marks}
              style={{width:"90%"}}
              onChange={(e)=>{setmarks(e.target.value)}}
            /></label>
            </div>
            <br/>
            <label class="input-text" style={{fontWeight:"bold"}}> Explanation: <br/>
            <input 
              type="text"  
              name="explanation" 
              value = {explanation}
              style={{width:"95%"}}
              onChange={(e)=>{setexplanation(e.target.value)}}
            /></label><br/>
              <div style={{backgroundColor: "#d4efff", paddingLeft:"4%", paddingRight:"4%", paddingTop:"7%",  paddingBottom:"7%", borderRadius:"2%"}}>
              <div  style={{fontWeight:"bold"}}>List of parameter IDs</div>
              <div >1. Remember</div>
              <div>2. Understand</div>
              <div>3. Apply</div>
              <div>4. Analyze</div>
              <div>5. Evaluate</div>
              <div>6. Create</div><br/>
              <label class="input-text" style={{fontWeight:"bold"}}> Parameter ID: <br/>
              <input 
                type="text"  
                name="parameter" 
                value={parameter}
                style={{width:"90%"}}
                onChange={(e)=>{setparameter(e.target.value)}}
            /></label>
            </div><br/><br/>
            
          </form>
          </div>
          </div>
          <div className='colright'>
          <div class="question" style={{ overflowX:"inherit",height:"58vh"}}>
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
            

            <CSVReader
                ref={buttonRef}
                onFileLoad={handleOnFileLoad}
                onError={handleOnError}
                noClick
                noDrag
              >
                {({ file }) => (
                  <aside
                    style={{
                      color: 'blue',
                      display: 'flex',
                      flexDirection: 'row',
                      marginBottom: 10,
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleOpenDialog}
                      className="custom-file-upload"
                    >
                      Upload file
                    </button>
                  </aside>
                )}
              </CSVReader>
              <br/><br/>

              <button className="custom-file-upload" style={{backgroundColor:"white",borderRadius:"0px",color:"black"}}><a target="_blank" style={{color:"black"}} href='https://docs.google.com/spreadsheets/d/1OVThzGBauOoMGKLfLa1cyjElcuof5zg9PuXqtxnsFns/edit?usp=sharing'>Download Template</a></button>
             
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