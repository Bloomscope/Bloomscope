import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';

import './sign-up.styles.scss';

class SignUp_student extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName:'',
      middleName:'',
      lastName: '',
      dob:'',
      email: '',
      contact:'',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { firstName, middleName, lastName, dob, email, contact, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Register Here</h2>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
            label='First Name'
            required
          />
          <FormInput
            type='text'
            name='middleName'
            value={middleName}
            onChange={this.handleChange}
            label='Middle Name'
            required
          />
          <FormInput
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            label='Last Name'
            required
          />
          <FormInput
            type='date'
            name='dob'
            value={dob}
            onChange={this.handleChange}
            label='Date of Birth'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='text'
            name='contact'
            value={contact}
            onChange={this.handleChange}
            label='Contact no.'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        <CustomButton type='submit'>PAYMENT</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp_student;