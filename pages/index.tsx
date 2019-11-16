import { useState } from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import About from '../components/About/About';
import Nav from '../components/Nav/Nav';
import Slider from '../components/Slider/Slider';

interface Props {
  open?: boolean;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  > img.wine-bg {
    width: 375px;
    height: auto;
    position: absolute;
    right: -50px;
    bottom: -220px;
    transform: rotate(-10deg);
  }
  > img.coffee-bg {
    width: 100%;
    max-width: 850px;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(0deg);
  }
`;

const Content = styled.main`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -15%;
  z-index: 1;
  header {
    display: flex;
    align-items: baseline;
    font-family: 'Special Elite';
    h1 {
      font-size: 60px;
    }
    h3 {
      font-size: 24px;
      font-family: 'Open Sans Condensed';
      margin: 0 0.5rem;
    }
  }
`;

const Subcontent = styled.section`
  height: ${(p: Props) => (p.open ? 400 : 0)}px;
  overflow: hidden;
  transition: all 0.25s ease-in;
  width: 100%;
  margin: 2rem 0;
`;

const Home = () => {
  const [view, setView] = useState('home');
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <Container>
      <Background>
        <img className="wine-bg" src="/img/wine.png" alt="" />
        <img className="coffee-bg" src="/coffee.png" alt="" />
      </Background>
      <Content>
        <header>
          <a onClick={() => setView('home')}>
            <h1>cofesta</h1>
          </a>
          <h3>
            A Flatiron coffeeshop by day...
            <Slider isSelected={isNightMode} select={setIsNightMode} />
          </h3>
        </header>
        <Nav setView={setView} />
        <Subcontent open={view !== 'home'}>
          {view === 'contact' && <Contact />}
          <Map show={view === 'map'} />
          {view === 'about' && <About />}
        </Subcontent>
      </Content>
    </Container>
  );
};

export default Home;
