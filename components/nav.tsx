import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: right;
`;

const CompanyName = styled.div`
  > h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
  }
`;

const Nav = () => (
  <NavBar>
    <CompanyName>
      <h1>Cofesta</h1>
    </CompanyName>
    <Links>
      <li>Hours/Location</li>
      <li>Menu</li>
      <li>Coffee</li>
    </Links>
  </NavBar>
);

export default Nav;
