import React, {useState}from 'react';
 
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';

import './sign-up.styles.scss';

const SignUp_parent = ({view}) =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDob] = useState('');
    const [childName, setchildName] = useState('');
    const [password, setPassword] = useState('');
    const [scontact, setSContact]=useState('');
    const [semail, setSEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lineClicked, setLineClicked] = useState(0);
    
    return (
      <>
      <div className='sign-up' style={view ? {display:'block'} : {display:'none'}}>
        <h2 className='title'>Parent Registration</h2>
        <form className='sign-up-form'>
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
            type='text'
            name='childName'
            value={childName}
            onChange={(e)=>{setchildName(e.target.value)}}
            label='Child Name'
            required
          />
          
      
          <FormInput onMouseEnter = {()=>{setLineClicked(1)}} onMouseLeave = {()=>{setLineClicked(0)}}
            type={lineClicked ? 'date' : 'text'}
            name='dob'
            value={dob}
            onChange={(e)=>{setDob(e.target.value)}}
            label={lineClicked ? '' : 'Child Date of Birth'}
            required
          />
          <FormInput
            type='email'
            name='semail'
            value={semail}
            onChange={(e)=>{setSEmail(e.target.value)}}
            label='Child Email'
            required
          />
          <FormInput
            type='text'
            name='scontact'
            value={scontact}
            onChange={(e)=>{setSContact(e.target.value)}}
            label='Child Contact no.'
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
          <CustomButton type='submit'>SIGN UP</CustomButton>
          <CustomButton type='submit'>PAYMENT</CustomButton>
        </form>
      </div>
      </>
    );
}

export default SignUp_parent;