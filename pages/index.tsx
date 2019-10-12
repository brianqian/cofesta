import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav';

const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.div`
  background-image: url('/static/img/cup2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 90vw;
  height: 100%;
  position: relative;
`;

const Main = styled.main``;

const Home = () => (
  <Container>
    <HeroImage>
      <Nav />
      <Main></Main>
    </HeroImage>
  </Container>
);

export default Home;
