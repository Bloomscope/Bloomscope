import React from 'react';
import SignIn from '../components/sign-in/sign-in-component'
import Navbar from '../../Home/components/Navbar'


const AdminLogin = () => {
    return (
        <div style = {{backgroundColor:"white", height:"100vh"}}>
        <Navbar/>
        <SignIn/>
        </div>
    )
}

export default AdminLogin
