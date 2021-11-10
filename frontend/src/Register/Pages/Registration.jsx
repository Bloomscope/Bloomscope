import React from 'react';
import SignUp_parent from '../components/sign-up/signup_parent';
import SignUp_student from '../components/sign-up/signup_student';
import Navbar from '../../Home/components/Navbar'

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            parent:false,
            student:false
        };

        this.handleClick_p = this.handleClick_p.bind(this);
        this.handleClick_s = this.handleClick_s.bind(this);
    }

    handleClick_p() {
    this.setState(prevState => ({
      parent: !prevState.parent
    }));
    }
    handleClick_s() {
    this.setState(prevState => ({
      student: !prevState.student
    }));
    }

    render(){
        return(
            <div>
            <Navbar/>
            <button onClick={this.handleClick_p}>
                parent
            </button>
            {this.state.parent? <SignUp_parent/> : ''}
            <button onClick={this.handleClick_s}>
                student
            </button>
            {this.state.student? <SignUp_student/> : ''}
            </div>            
        )
    }
}

export default Registration;