import React from 'react';
import { BrowserRouter, Routes, Navigate  } from 'react-router-dom';
import {login, useAuth, logout} from "../../auth"
// import Login from "./Login.js"

const Logout = () => {
    const [logged, token] = useAuth();

    return (
        <>
        <Navigate  to="/" />
        {/* {!logged ?
            <> 
                <Navigate  to="/login" />
            </>
        :
        <>
                if(token.type == 1)
                <Navigate  to = "/student" />
                else if(token.type == 2)
                <Navigate  to = "/parent" />
            </>
        } */}
        </>
    );
};
export default Logout;