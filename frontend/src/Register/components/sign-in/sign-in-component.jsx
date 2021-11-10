import  React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import FormInput from '../form-input/form-input.component'
import './sign-in-styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit=event=>{
        event.preventDefault();

        this.setState=({email:'', password:''});
    }

    handleChange=event =>{
        const {value,name}= event.target;

        this.setState=({[name]:value});
    }
    render(){
        return(
            <div className= "sign-in">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" handleChange={this.handleChange} value={this.state.email}  required/>
                    <FormInput name="password" type="password" label="Password" handleChange={this.handleChange} value={this.state.password}  required/>
                    
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignIn;