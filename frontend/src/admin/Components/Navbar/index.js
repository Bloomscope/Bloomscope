import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";
import logo from './logo.PNG';
import {logout} from "../../../auth"

const Navbar = () => {
  const [NavMobile, SetNavMobile] = useState(0);
  return (
    <>
      <Nav>
        <img src={logo} alt="Logo" />
        <NavMenu>
          <NavLink onClick={() => logout()} to = "/logout">
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
