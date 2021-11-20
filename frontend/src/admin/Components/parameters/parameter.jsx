import React, {useState}from 'react';
import CustomButton from '../../../Register/components/custom-button/custom-button-component';

const Parameter = ({view}) =>{
    
    const [parameterName, setparameterName]=('');
    const [questions, setquestions]=('');

    const handleChange = e =>{
        //add form input to json
    }
    return(
  
            <div style={view ? {display:'block'} : {display:'none'}}>
             <form>
             <label> Parameter Name: 
             <input 
                    type='text'
                    name='parameterName'
                    value={parameterName}
                    onChange = {(e)=>{setparameterName(e.target.value)}}
                    
                    required
                />
             </label>
             <label> Number of Questions:
             <input
                    type='text'
                    name='questions'
                    value={questions}
                    onChange={(e)=>{setquestions(e.target.value)}}
                    
                    required
                />
             </label>
                
                
                <CustomButton type="submit">Add</CustomButton>
             </form>
                
            </div>

            
    );

}

export default Parameter;