import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import styled from "styled-components";
import {authFetch, useAuth, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import { CSVReader } from 'react-papaparse';

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// const buttonRef = React.createRef();

function MassRegistration() {
  const [file, setFile] = useState(''); 
  const [msg,updatedmsg] = useState('');   

  // const handleOpenDialog = (e) => {
  //   // Note that the ref is set async, so it might be null at some point
  //   if (buttonRef.current) {
  //     buttonRef.current.open(e);
  //   }
  // };

  // const handleOnFileLoad = (data) => {
  //   updatedmsg("")
  //   console.log(data);
  //   updatedmsg("Uploaded")
  //   var questions = []
  //   for(var i = 1; i < data.length ; i++){
  //     var options = []
  //     for(var j = 7 ; j < data[i].length ; j+=3){
  //       if(data[i][j] == "")
  //       continue;
  //       let opt = {
  //         "opt": data[i][j], 
  //         "value": data[i][j+1],  
  //         "opt_type": data[i][j+2] 
  //       };
  //       options.push(opt)
  //     }
  //     let ques = {
  //       // "grade": data[i][0],
  //       "question": {
  //        "value": data[i][1],
  //        "question_type": data[i][2]
  //       },
  //       "options": options,
  //       "ans": data[i][3],
  //       "explanation": data[i][4],
  //       "param_id": data[i][5],
  //       "marks": data[i][6]
  //     }
  //     questions.push(ques)
  //   }
  //   var d = {
  //     "data": questions
  //   }
  //   console.log(d);

  // };

  // const handleOnError = (err, file, inputElem, reason) => {
  //   console.log(err);
  //   updatedmsg(err)
  // };


  const handleFileUpload = e => {
    updatedmsg('')
    const file = e.target.files[0]; 
    console.log(file);
    setFile(file);

    const formData = new FormData();        
    formData.append('file', file);

    authFetch('/api/mass_register',{
          method:'post',
          body: formData,
        })
        .then(r => r.json())
        .then((r) => {
          console.log(r)
          updatedmsg(r.msg)
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
			<h1>Mass Registration</h1>
      <div className='massreg'>
      <div>
        <div  style={{fontWeight:"bold"}}>Instructions:</div>
        <div>1. Download or use a copy of this sheet to use.</div>
        <div>2. Fill in the columns in the same order.</div>
        <div>3. Each row represents a question.</div>
        <div>4. Note that the number of columns for every row depends on the number of options in a question.</div>
        <div>5. Use the first row as column headers to understand.</div>
        <div>6. If the option or question is an image, you will have to host it online and add it's URL link.</div>
        <div>7. For an image the type is "img" and for text is "str"</div>
        <div>8. For the question/option type you can only input "str" or "img".</div>
        <div>9. Avoid using single or double quotes in the question or options.</div>
        <div>10. On completing the sheet, download it as CSV. (Option will be given while downloading)</div>
      </div>
      <label className="custom-file-upload">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
          />
          Custom Upload
      </label>
      {/* <CSVReader
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
                Browse file
              </button>
            </aside>
          )}
        </CSVReader> */}
      <button className="custom-file-upload" style={{backgroundColor:"white",borderRadius:"0px",color:"black"}}><a target="_blank" style={{color:"black"}} href='https://docs.google.com/spreadsheets/d/1ykzb-h-fZYYRwrR0zV5_fk4UKEmBjeMuFvz_qxTB9zg/edit?usp=sharing'>Download Template</a></button><br/>
      {(msg!=="")?<div className="message">{msg}</div>:<></>}
		</div></div>
    
    </Holder>
    </>
	:
	<>
    <NotLoggedIn/>
	</>}</>
  );
}

export default MassRegistration;