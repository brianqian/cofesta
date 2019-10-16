import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav';
import Location from '../components/Location/Location';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  position: relative;
`;

const HeroImage = styled.div`
  display: block;
  background-image: url('/static/img/cup2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 800px;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const Main = styled.main`
  background-color: transparent;
  z-index: 3;
  color: white;
  grid-column: 2;
  position: relative;
`;

const TextBox = styled.div`
  margin: 3rem;
  padding: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.3);
  }
  p {
    z-index: 5;
    font-family: 'Cormorant Garamond';
    font-size: 22px;
    margin-top: 20%;
    /* border: 1px solid pink; */
  }
`;

const Home = () => (
  <Container>
    <Nav />
    <Hero>
      <HeroImage>
        <Main>
          <TextBox>
            <p>
              Come enjoy a cup of coffee at your local Flatiron coffee shop. Here we pride ourselves
              in high quality food and drinks. Try some of our signature dishes sourced fresh from
              the local farmer's market or our{' '}
              <a href="https://www.devocion.com/" target="_blank">
                Devoción
              </a>{' '}
              cold-brew & espresso drinks.
            </p>
            <p> Join us for happy hour weekdays from 3-5pm.</p>
          </TextBox>
        </Main>
      </HeroImage>
      <Location />
    </Hero>
  </Container>
);

export default Home;
