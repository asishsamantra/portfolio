import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { navbarData } from '../data/NavbarData';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  height: 60px;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const animate = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 60px;
  position: absolute;
  left: 80px;
  top: 2px;
  font-weight: 500;
  background: linear-gradient(
    90deg,
    #ff0000,
    #ffff00,
    #ff00f3,
    #0033ff,
    #ff00c4,
    #ff0000
  );
  background-size: 400%;
  font-family: sans-serif;
  word-spacing: 5px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${animate} 10s linear infinite;
`;
const NavMenu = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  font-size: 20px;
  position: absolute;
  right: 50px;
`;
const NavMenuLinks = styled(Link)`
  text-decoration: none;
  padding: 10px;
  margin: 15px;
  color: white;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    border-bottom: 3px solid #4169e1;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo to='/'>Hey... I am Asish</Logo>
      <NavMenu>
        {navbarData.map((item, index) => (
          <NavMenuLinks to={item.link} key={item.index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
