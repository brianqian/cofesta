import React from 'react';
import styled from 'styled-components';

interface P {
  isSelected: boolean;
  select: () => void;
  width?: string;
}

interface MarkerProps {
  isSelected: boolean;
}

const Container = styled.div`
  width: 40px;
  height: 20px;
  border: 1.5px solid black;
  border-radius: 40px;
  display: inline-block;
`;

const Marker = styled.svg<MarkerProps>`
  height: 10px;
  width: 10px;
  position: relative;
  ${(props) => (props.isSelected ? 'left: 0;' : 'right: 0;')}
`;

function Slider({ isSelected, select }: P) {
  return (
    <Container onClick={select}>
      <Marker viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" isSelected={isSelected}>
        <circle cx="50" cy="50" r="50" />
      </Marker>
    </Container>
  );
}

export default Slider;
