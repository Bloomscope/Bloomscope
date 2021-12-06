import  React, {useState} from 'react';
import CustomButton from '../components/custom-button/custom-button-component';
import FormInput from '../components/form-input/form-input.component'
import './sign-in-styles.scss';
import styled from "styled-components";
import { useNavigate  } from "react-router";
import Navbar from '../../Home/components/Navbar'
import {login, useAuth, logout} from "../../auth"
import { BrowserRouter, Routes, Navigate  } from 'react-router-dom';

const loginMsg = styled.div`
  font-size:2rem;
  border: 1rem solid yellow;
  display: ${(props) => (props.ContentView ? "none" : "flex")};
`;
  

const StudentSignIn = () =>{
  const[authMsg, SetAuthMsg] = useState();
  const [logged] = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const nav = useNavigate();
    const onSubmitClick = (e)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'email': email,
        'password': password,
      }
      console.log(opts)
      fetch('api/login', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(r => r.json())
        .then(token => {
          login(token);
            if (token.access_token){
                console.log(token) 
                if(token.type == 1)
                    nav('/student', {state: token});
                else if(token.type == 2)
                    nav('/parent', {state: token});         
            }
            else {
                console.log("Please type in correct username/password");
                SetAuthMsg(1);
            }
        })
        .catch(error => console.log(error))
    }
    return (
      <>
        {!logged? 
            <div style = {{backgroundColor:"white", height:"100vh"}}>
            <Navbar/>
            <div className= "sign-in">
              <h2>Student Log-In</h2>
              <form>
              <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  label='Email'
                  required
                />
                <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  label='Password'
                  required
                />
                  <div className='buttons'>
                      <CustomButton onClick= {onSubmitClick} type='submit'> Sign in </CustomButton>
                  </div>
              </form>
              <loginMsg ContentView={authMsg}>Enter valid credentials</loginMsg>
          </div>
          </div>
          :
          <>
          <Navigate  to = "/student/dashboard" />
          </>
      }
      </>
    );
}

export default StudentSignIn;
