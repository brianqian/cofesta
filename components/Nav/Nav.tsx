import React from 'react';
import styled from 'styled-components';
import Share from '../Icons/Share';

interface P {
  setView: (arg0: string) => void;
  isDark: boolean;
  view: string;
}

interface AnchorP {
  isSelected?: boolean;
  theme?: any;
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Anchor = styled.a<AnchorP>(
  ({ isSelected, theme }) => `
  color: ${isSelected ? theme.strokeColor : 'gray'};
  font-size: 28px;
  text-decoration: none;
  position: relative;
  transition: color .25s ease-in;
  ${isSelected && `border-bottom: 1.5px solid ${theme.strokeColor};`}};
  ::after {
    content: '';
    transition: width .25s ease-in;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    ${!isSelected && `border-bottom: 1.5px solid ${theme.strokeColor};`}
  }

  :hover::after{
   width: 100%;
  }
  
`
);

const StyledShare = styled(Share)`
  position: absolute;
  top: 8px;
  right: -12px;
`;

function Nav({ setView, isDark, view }: P) {
  return (
    <Container>
      <Anchor onClick={() => setView('about')} isSelected={view === 'about'}>
        about
      </Anchor>
      <Anchor onClick={() => setView('map')} isSelected={view === 'map'}>
        location
      </Anchor>
      <Anchor onClick={() => setView('contact')} isSelected={view === 'contact'}>
        contact
      </Anchor>
      <Anchor href="/img/menu/menu.pdf" target="_blank">
        menu
        <StyledShare width="12" bg={isDark ? '#000' : '#fff'} stroke={isDark ? '#fff' : '#000'} />
      </Anchor>
    </Container>
  );
}

export default Nav;
