import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0 3rem;
  height: 60px;
  border-bottom: 1px solid #920000;
  position: fixed;
  top: 0;
  z-index: 5;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: right;
  font-size: 20px;
  z-index: 3;
  > li {
    margin: 0 1.5rem;
    text-transform: uppercase;
  }
  a {
    color: white;
    cursor: pointer;
  }
  & .active {
    border-bottom: 2px solid white;
  }
`;

const CompanyName = styled.div`
  > h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
  }
  span {
    font-size: 18px;
  }
`;

const Nav = () => (
  <NavBar>
    <CompanyName>
      <h1>
        Cofesta <span> Flatiron Coffee & Wine Bar</span>
      </h1>
    </CompanyName>
    <Links>
      <li>
        <a className="active">Home</a>
      </li>
      <li>
        <a>Hours/Location</a>
      </li>
      <li>
        <a>Menu</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </Links>
  </NavBar>
);

export default Nav;
