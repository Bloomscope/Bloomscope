import  React, {useState} from 'react';
import CustomButton from '../components/custom-button/custom-button-component';
import FormInput from '../components/form-input/form-input.component'
import Navbar from '../../Home/components/Navbar'
import { useNavigate  } from "react-router";
import {login, useAuth, getSessionState} from "../../auth"
import { Navigate  } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logged] = useAuth();
    const nav = useNavigate();
    const onSubmitClick = (e)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'email': email,
        'password': password,
      }
      console.log(opts)
      fetch('/api/admin_login', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(r => r.json())
        .then(token => {
            if (token.access_token){
              login(token)
                console.log(token) 
                nav('/admin/StudentData', {state: token});         
            }
            else {
                console.log("Please type in correct username/password")
            }
        })
        .catch(error => console.log(error))
    }
	const access = getSessionState();
    return (
        <>
        {(!logged||access.type!=3)? 
        <div style = {{backgroundColor:"white", height:"100vh"}}>
            <Navbar/>
            <div className= "sign-in">
                <h2>Admin Log-In</h2>
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
        </div>
          :
          <>
          <Navigate  to = "/admin/dashboard" />
          </>
      }
      </>
    )
}
export default AdminLogin;
