import React, {useState}from 'react';
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import './styles.scss'
const Option = (e) => {
    
    const [optionName, setoptionName]=useState('');
    const [content, setcontent]=useState('');
    const [contentType, setcontentType]=useState('');
    var data ={Opt_name:optionName, cont_type:contentType,cont:content}
    
    const handleChange = e =>{
        data.Opt_name= ""
        data.cont_type = ""
        data.cont = ""
        //add form input to json
    }
    console.log(data);
    return(
  
            <div>
             <form onSubmit={handleChange}>
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
             <select  value={contentType} onChange={(e)=>{setcontentType(e.target.value)}}>
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
                
            <CustomButton type="submit">Add</CustomButton>
             </form>
                
            </div>
           
            
    );

}

export default Option;