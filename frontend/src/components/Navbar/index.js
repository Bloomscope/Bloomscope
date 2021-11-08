import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";

const Navbar = () => {
  const [NavMobile, SetNavMobile] = useState(0);
  return (
    <>
      <Nav>
        <Bars onClick={() => SetNavMobile(!NavMobile)} />
        <h1>Register</h1>
        <NavMenu>
          <NavLink to="/Parent_reg" activeStyle>
            Parent Registration
          </NavLink>
          <NavLink to="/Student_reg" activeStyle>
            Student Registration
          </NavLink>
          <NavLink to="/index" activeStyle>
            Back to Home
          </NavLink>
        </NavMenu>
      </Nav>

      <NavDrop view={NavMobile} />
    </>
  );
};

export default Navbar;
