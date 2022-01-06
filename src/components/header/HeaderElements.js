import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: transparent;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: relative;
  height: 80px;
  z-index: 10;
`;

export const NavLogo = styled(Link)`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  font-style: italic;
`;

export const NavMenuItems = styled.div`
  padding:5px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavMenuLink = styled(Link)`
  margin: auto 12px;
`;

export const NavBar = styled(FaBars)`
  font-size: 27px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-15px, 30px);
  cursor:pointer;
  display: none;

  @media screen and (max-width:768px) {
      display: block;
  }
`;