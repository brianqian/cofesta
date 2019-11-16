import React from 'react';
import styled from 'styled-components';

interface P {
  setView: (arg0: string) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  a {
    color: gray;
    font-size: 28px;
    text-decoration: none;
    position: relative;
    transition: 0.25s ease-in;
    :hover {
      color: black;
    }
  }
  img {
    height: 12px;
    width: 12px;
    position: absolute;
    top: 8px;
    right: -12px;
  }
`;

function Nav({ setView }: P) {
  return (
    <Container>
      <a onClick={() => setView('about')}>about</a>
      <a onClick={() => setView('map')}>map</a>
      <a onClick={() => setView('contact')}>contact</a>
      <a href="/img/menu/menu.pdf" target="_blank">
        menu
        <img src="/img_569296.png"></img>
      </a>
    </Container>
  );
}

export default Nav;
