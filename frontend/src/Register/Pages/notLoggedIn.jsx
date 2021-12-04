import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./notLoggedInNav";
import { BrowserRouter, Routes, Navigate,Link  } from 'react-router-dom';
import logo from './logo.PNG';
import {login, useAuth, logout,getSessionState} from "../../auth"

const NotLoggedIn = () => {
return (
<>
      <Nav>
        {/* <Bars onClick={() => SetNavMobile(!NavMobile)} /> */}
        <img src={logo} alt="Logo" />
        
        <NavMenu>
          {/* <NavLink onClick={() => logout()} to="/"> */}
          <NavLink to="/">
            Home
          </NavLink>
        </NavMenu>
      </Nav>
  </>
);
}

export default NotLoggedIn;
