import  React, {useState} from 'react';
import CustomButton from '../components/custom-button/custom-button-component';
import FormInput from '../components/form-input/form-input.component'
import './sign-in-styles.scss';
import { useNavigate  } from "react-router";
import Navbar from '../../Home/components/Navbar'
import {login, useAuth, getSessionState} from "../../auth"
import { Navigate  } from 'react-router-dom';
import NotLoggedIn from "./notLoggedIn.jsx";
import styled from "styled-components";

const LoginMsg = styled.div`
  align-items: center;
  flex-direction: column;
  color: #cc0033;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  text-shadow: 1px 1px rgba(250,250,250,.3);
`;

const ErrorCont = styled.div`
display: ${(props) => (props.ContentView ? "flex" : "none")};
background-color: #fce4e4;
border: 1px solid #fcc2c3;
float: center;
width: 15rem;
padding: 20px 30px;
margin-left: 2.5rem;
`;

const SignIn = () =>{  
  const [authMsg, SetAuthMsg] = useState(0);
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
          if(token.has_parent){
              if (token.access_token){
                console.log(token) 
                if(token.type == 1){
                  login(token);
                  nav('/student/dashboard', {state: token});
                }
                else if(token.type == 2){
                  login(token);
                  nav('/parent/dashboard', {state: token});  
                }
                else if (token.access_token === "Null") {
                    SetAuthMsg(1);
                }       
            }
            else {
                console.log("Please type in correct username/password");
                SetAuthMsg(1);
            }
          }
          else{
            console.log(token)
            nav('/parentRegistration', {state: token});
          }
            
        })
        .catch(error => console.log(error))
    }
    
	const access = getSessionState();
    return (
      <>
        {(!logged||access.type==3)? 
            <div style = {{backgroundColor:"white", height:"100vh"}}>
            <Navbar/>
            <div className= "sign-in">
              <h2>Log-In</h2>
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
          </div>
          <ErrorCont ContentView={authMsg}>
          <LoginMsg>Please enter valid credentials</LoginMsg>
          </ErrorCont>
          </div>
          :(access.type==2)?
          <>
          <Navigate  to = "/parent/dashboard" />
          </>:(access.type==1)?
          <>
          <Navigate  to = "/student/dashboard" />
          </>:<><NotLoggedIn/></>
      }
      </>
    );
}

export default SignIn;
