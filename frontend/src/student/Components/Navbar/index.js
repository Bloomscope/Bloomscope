// import React, { useState } from "react";
// import { Nav, NavLink, Bars, NavMenu, NavDrop } from "./NavbarElements";
import logo from './logo.PNG';
import {logout} from "../../../auth";
import './logo.scss';

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
  <img src={logo} className='logo' alt="Logo" />
		<Bars />

		<NavMenu>
		<NavLink onClick={() => logout()} to = "/logout">         
      Logout
    </NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
