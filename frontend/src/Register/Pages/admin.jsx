import  React, {useState} from 'react';
import CustomButton from '../components/custom-button/custom-button-component';
import FormInput from '../components/form-input/form-input.component'
// import Navbar from '../components/form-input/form-input.component'
import Navbar from '../../Home/components/Navbar'
// import './sign-in-styles.scss';
import { useNavigate  } from "react-router";
// import {login} from "../../auth"

const AdminLogin = () => {
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
            if (token.access_token){
            //   login(token)
                console.log(token) 
                nav('/admin', {state: token});         
            }
            else {
                console.log("Please type in correct username/password")
            }
        })
        .catch(error => console.log(error))
    }

    return (
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
        </div>
    )
}
export default AdminLogin;
