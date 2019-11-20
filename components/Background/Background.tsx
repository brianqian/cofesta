import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface BackgroundProps {
  isDark: boolean;
  w?: string;
}

const fadeInAfter1Second = keyframes`
0% {
  opacity: 0;
}

50% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const Container = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  transition: 0.5s ease-out;
  > img {
    transition: 0.5s ease-out;
    position: absolute;
    height: auto;
    width: ${(p) => p.w || ''}px;
  }
  > img.day-bg {
    opacity: ${(props) => (props.isDark ? 0 : 1)};
  }
  > img.wine-bg {
    width: 375px;
    right: -50px;
    bottom: -220px;
    transform: rotate(-10deg);
  }
  > img.coffee-bg {
    width: 100%;
    max-width: 850px;
    bottom: 0;
    left: 0;
  }
  > img.dark-wine-bg {
    opacity: ${(props) => (props.isDark ? 1 : 0)};
    width: 600px;
    bottom: 0;
    right: 0;
  }
  > img.animate-wine {
    animation: 2s ${fadeInAfter1Second} ease-in;
  }
`;
function Background({ isDark }: BackgroundProps) {
  return (
    <Container isDark={isDark}>
      <img className="wine-bg day-bg" src="/img/wine.png" alt="" />
      <img className="coffee-bg day-bg" src="/img/coffee.png" alt="" />
      <img
        className={`dark-wine-bg night-bg ${isDark && 'animate-wine'}`}
        src="/img/dark-wine.png"
        alt=""
      />
    </Container>
  );
}

export default Background;
