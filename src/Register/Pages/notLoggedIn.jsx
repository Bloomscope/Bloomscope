import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./notLoggedInNav";
import logo from './logo.PNG';
const NotLoggedIn = () => {
return (
<>
      <Nav>
        <img src={logo} alt="Logo" />
        
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
        </NavMenu>
      </Nav>
  </>
);
}

export default NotLoggedIn;
