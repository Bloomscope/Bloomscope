import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';
import './sign-up.styles.scss';
import { useNavigate  } from "react-router";

// const Login = (props) => { 
//   const handleLogin = async (userDetail) => {
//    const success = await userLogin(userDetail);
//    if(success) props.history.push('/parentRegistration');
//   }
// }
  

const SignUp_student = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lineClicked, setLineClicked] = useState(0);
    
    const nav = useNavigate();
    const onSubmitClick = (e)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'fname': firstName,
        'mname': middleName,
        'lname': lastName,
        'dob': dob,
        'email': email,
        'phone': contact,
        'password': password,
        'user_type_id': '1' //check later
      }
      console.log(opts)
      fetch('api/register_user', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(r => r.json())
        .then(r => {
          console.log(r)
          if(r.status == 'success'){
            nav('/parentRegistration', {state: r});
          }
        })
        .catch(error => console.log(error))
    }
   
    return (
      <>
      <div className='sign-up' >
        <h2 className='title'>Student Registration</h2>
        <form className='sign-up-form' onSubmit='required()'>
          <FormInput
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
            label='First Name'
            required
          />
          <FormInput
            type='text'
            name='middleName'
            value={middleName}
            onChange={(e)=>{setMiddleName(e.target.value)}}
            label='Middle Name'
            required
          />
          <FormInput
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e)=>{setLastName(e.target.value)}}
            label='Last Name'
            required
          />
          <FormInput onMouseEnter = {()=>{setLineClicked(1)}} onMouseLeave = {()=>{setLineClicked(0)}}
            type={lineClicked ? 'date' : 'text'}
            name='dob'
            value={dob}
            onChange={(e)=>{setDob(e.target.value)}}
            label={lineClicked ? '' : 'Date of Birth'}
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            label='Email'
            required
          />
          <FormInput
            type='text'
            name='contact'
            value={contact}
            onChange={(e)=>{setContact(e.target.value)}}
            label='Contact no.'
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
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
            label='Confirm Password'
            required
          />
          <CustomButton onClick={onSubmitClick} type='submit'>SIGN UP</CustomButton>
        {/* <CustomButton type='submit'>PAYMENT</CustomButton> */}
        </form>
      </div>

  </>
    );
}

export default SignUp_student;