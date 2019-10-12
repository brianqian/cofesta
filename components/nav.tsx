import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: white;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 0 3rem;
  height: 60px;
  & :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(4px);
    width: 100%;
    height: 60px;
    opacity: 0.3;
    background-color: darkgray;
  }
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
    color: red;
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
        <a className="active">Hours/Location</a>
      </li>
      <li>
        <a>Menu</a>
      </li>
      <li>
        <a>Coffee</a>
      </li>
    </Links>
  </NavBar>
);

export default Nav;
