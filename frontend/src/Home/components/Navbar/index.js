

// import React, { useState } from "react";
// import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";
import logo from './logo.PNG';
import {logout} from "../../../auth"

// const Navbar = () => {
//   const [NavMobile, SetNavMobile] = useState(0);
//   return (
//     <>
//       <Nav>
//         <img src={logo} alt="Logo" />
//         <NavMenu>
//           <NavLink onClick={() => logout()} to = "/logout">
//             Logout
//           </NavLink>
//         </NavMenu>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;

import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
  <img src={logo} style={{width:"30%", height:"90%"}} alt="Logo" />
		<Bars />

		<NavMenu>
		<NavLink to="/studentRegistration">
            Register
          </NavLink>
          <NavLink to="/signIn">
          Sign In
          </NavLink>
          <NavLink to="/adminLogin">
            Admin
          </NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
