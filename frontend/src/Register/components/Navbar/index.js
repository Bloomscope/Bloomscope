import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";

const Navbar = () => {
  const [NavMobile, SetNavMobile] = useState(0);
  return (
    <>
      <Nav>
        <Bars onClick={() => SetNavMobile(!NavMobile)} />
        <h1>Home</h1>
        <NavMenu>
          <NavLink to="/Registration">
            Register
          </NavLink>
          <NavLink to="/Login">
            Login
          </NavLink>
          <NavLink to="/admin">
            Admin
          </NavLink>
        </NavMenu>
      </Nav>

      <NavDrop view={NavMobile} />
    </>
  );
};

export default Navbar;
