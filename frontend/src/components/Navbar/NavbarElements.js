import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #f0f0f0;
height: 4.5em;	
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
white-space: nowrap;
@media screen and (max-width: 768px) {
	display: none;
}
`;
const NavDropContent = styled.div`
display: ${props => (props.ContentView ? 'flex' : 'none')};
align-items: center;
flex-direction: column;
`
export const NavDrop = ({view}) => {
	return(
		<Nav>
	<NavDropContent ContentView = {view}>
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
	</NavDropContent>
	</Nav>
	)
}
