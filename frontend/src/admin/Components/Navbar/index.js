import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";

const Navbar = () => {
  const [NavMobile, SetNavMobile] = useState(0);
  return (
    <>
      <Nav>
        <Bars onClick={() => SetNavMobile(!NavMobile)} />
        <h1>Admin</h1>
        <NavMenu>
          <NavLink to="/Logout">
            Logout
          </NavLink>
        </NavMenu>
      </Nav>

      <NavDrop view={NavMobile} />
    </>
  );
};

export default Navbar;
