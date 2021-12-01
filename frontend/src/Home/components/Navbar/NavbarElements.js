import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  height: 4.5em;
  display: flex;
  box-shadow: 3px 3px 6px 5px #ccc;
  justify-content: space-between;
  padding: 0.6rem calc((10vw - 100px));
  z-index: 12;
  @media screen and (max-width: 768px){
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;  
  transition: 0.2s ease-in-out;
  &.active {
    color: #000000;
  }
  &.hover {
	transition: 0.2s ease-in-out;
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
  display: ${(props) => (props.ContentView ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
`;

const ExpandedNav = styled.div`
align-items: center;
flex-direction: column;
`;
export const NavDrop = ({ view }) => {
  return (
    <ExpandedNav>
      <NavDropContent ContentView={view}>
          <NavLink to="/Login">
            login
          </NavLink>
          <NavLink to="/studentRegistration">
            Register
          </NavLink>
          <NavLink to="/admin">
            Admin
          </NavLink>
      </NavDropContent>
    </ExpandedNav>
  );
};
