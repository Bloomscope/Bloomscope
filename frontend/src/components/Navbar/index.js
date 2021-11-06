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
		<Bars />

		<NavMenu>
		<NavLink to='/Parent_reg' activeStyle>
			Parent Registration
		</NavLink>
        <NavLink to='/Student_reg' activeStyle>
			Student Registration
		</NavLink>
		<NavLink to='/index' activeStyle>
			Back to Home
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
