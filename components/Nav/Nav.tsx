import React from 'react';
import styled from 'styled-components';
import Share from '../Icons/Share';

interface P {
  setView: (arg0: string) => void;
  isDark: boolean;
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
  }
`;

const StyledShare = styled(Share)`
  position: absolute;
  top: 8px;
  right: -12px;
`;

function Nav({ setView, isDark }: P) {
  return (
    <Container>
      <a onClick={() => setView('about')}>about</a>
      <a onClick={() => setView('map')}>location</a>
      <a onClick={() => setView('contact')}>contact</a>
      <a href="/img/menu/menu.pdf" target="_blank">
        menu
        <StyledShare width="12" bg={isDark ? '#000' : '#fff'} stroke={isDark ? '#fff' : '#000'} />
      </a>
    </Container>
  );
}

export default Nav;
