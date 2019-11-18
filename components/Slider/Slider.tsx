import React from 'react';
import styled from 'styled-components';

interface P {
  isSelected: boolean;
  select: any;
  width?: string;
}

interface MarkerProps {
  isSelected: boolean;
}

const Container = styled.div`
  width: 40px;
  height: 20px;
  border: 2px solid black;
  border-radius: 40px;
  padding: 2.5px 0;
  position: relative;
  margin: 0 0.5rem;
`;

const Marker = styled.svg<MarkerProps>`
  height: 11px;
  width: 11px;
  position: absolute;
  transition: 0.25s ease-in;
  left: 3px;
  ${(props) => props.isSelected && 'transform: translateX(19px);'} /* right: 3px; */
`;

function Slider({ isSelected, select }: P) {
  return (
    <Container onClick={() => select(!isSelected)}>
      <Marker viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" isSelected={isSelected}>
        <circle cx="50" cy="50" r="50" />
      </Marker>
    </Container>
  );
}

export default Slider;
