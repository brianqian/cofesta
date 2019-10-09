import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100vw;
  > ul {
    display: flex;
  }
`;

const Nav = () => (
  <NavBar>
    <ul>
      <li>Home</li>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </NavBar>
);

export default Nav;
