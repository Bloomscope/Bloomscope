// import { FaBars } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";

// export const Nav = styled.nav`
//   background: #ffffff;
//   height: 4.5em;
//   display: flex;
//   box-shadow: 3px 3px 6px 5px #ccc;
//   justify-content: space-between;
//   padding: 0.6rem calc(10vw - 100px);
//   z-index: 12;
//   @media screen and (max-width: 768px){
//     justify-content: center;
//   }
// `;

// export const NavLink = styled(Link)`
//   color: #808080;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;  
//   transition: 0.2s ease-in-out;
//   &.active {
//     color: #000000;
//   }
//   &.hover {
// 	transition: 0.2s ease-in-out;
//     color: #000000;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   white-space: nowrap;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// const NavDropContent = styled.div`
//   display: ${(props) => (props.ContentView ? "flex" : "none")};
//   align-items: center;
//   flex-direction: column;
// `;

// const ExpandedNav = styled.div`
// align-items: center;
// flex-direction: column;
// `;
// export const NavDrop = ({ view }) => {
//   return (
//     <ExpandedNav>
//       <NavDropContent ContentView={view}>
//           <NavLink to="/Login">
//             login
//           </NavLink>
//           <NavLink to="/Registration">
//             Register
//           </NavLink>
//           <NavLink to="/admin">
//             Admin
//           </NavLink>
//       </NavDropContent>
//     </ExpandedNav>
//   );
// };


import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #ffffff;
height: 85px;
display: flex;
justify-content: space-between;
box-shadow: 3px 3px 6px 5px #ccc;
padding: 0.6rem calc(10vw - 100px);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
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
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
