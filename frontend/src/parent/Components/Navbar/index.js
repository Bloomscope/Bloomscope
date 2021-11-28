import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";
import logo from './logo.PNG';

const Navbar = () => {
  const [NavMobile, SetNavMobile] = useState(0);
  return (
    <>
      <Nav>
        {/* <Bars onClick={() => SetNavMobile(!NavMobile)} /> */}
        <img src={logo} alt="Logo" />
        <NavMenu>
          <NavLink to="/Logout">
            Logout
          </NavLink>
        </NavMenu>
      </Nav>

      {/* <NavDrop view={NavMobile} /> */}
    </>
  );
};

export default Navbar;
