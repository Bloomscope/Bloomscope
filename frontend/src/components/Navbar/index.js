import React, {useState} from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavDrop,
} from './NavbarElements';

const Navbar = () => {
	const[NavMobile, SetNavMobile] = useState(0);
return (
	<>
	<Nav>
		<Bars onClick = {() => SetNavMobile(!NavMobile)}/>
		<NavDrop view = {NavMobile}/>
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
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
