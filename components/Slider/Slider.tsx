import React from 'react';
import styled from 'styled-components';
import { NightProps } from '../../pages';

interface P {
  select: any;
  width?: string;
  isDark: boolean;
}

interface MarkerProps {
  isSelected: boolean;
}

const Container = styled.div<NightProps>`
  width: 40px;
  height: 20px;
  border: 2px solid ${(props) => (props.isDark ? 'white' : 'black')};
  border-radius: 40px;
  padding: 2.5px 0;
  position: relative;
  transition: 0.35s ease-in;
  margin: 0 0.5rem;
`;

const Marker = styled.svg<MarkerProps>`
  height: 11px;
  width: 11px;
  transition: 0.35s ease-in;
  position: absolute;
  left: 3px;
  ${(props) => props.isSelected && 'transform: translateX(19px);'} /* right: 3px; */
`;

function Slider({ select, isDark = false }: P) {
  return (
    <Container onClick={select} isDark={isDark}>
      <Marker viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" isSelected={isDark}>
        <circle cx="50" cy="50" r="50" fill={isDark ? '#fff' : '#000'} />
      </Marker>
    </Container>
  );
}

export default Slider;
