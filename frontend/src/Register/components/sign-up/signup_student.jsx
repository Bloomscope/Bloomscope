import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';

import './sign-up.styles.scss';

const SignUp_student = ({view}) =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lineClicked, setLineClicked] = useState(0);
    return (
      <>
      <div className='sign-up' style={view ? {display:'none'} : {display:'block'}}>
        <h2 className='title'>Register Here</h2>
        <form className='sign-up-form' onSubmit=''>
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
          <CustomButton type='submit'>SIGN UP</CustomButton>
        <CustomButton type='submit'>PAYMENT</CustomButton>
        </form>
      </div>

  </>
    );
}

export default SignUp_student;