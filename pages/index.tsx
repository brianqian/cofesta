import { useState } from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import About from '../components/About/About';
import Nav from '../components/Nav/Nav';
import Slider from '../components/Slider/Slider';

interface Props {
  toggleNight: () => {};
  isDark: boolean;
}
interface SubcontentProps {
  open?: boolean;
}

export interface NightProps {
  isDark: boolean;
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

const Background = styled.div<NightProps>`
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
      font-size: 20px;
      font-family: 'Open Sans Condensed';
      margin: 0 0.5rem;
      display: flex;
      align-items: center;
    }
  }
`;

const Subcontent = styled.section<SubcontentProps>`
  height: ${(p) => (p.open ? 400 : 0)}px;
  overflow: hidden;
  transition: 0.25s ease-in;
  width: 100%;
  margin: 2rem 0;
`;

const Home = (props: Props) => {
  const [view, setView] = useState('home');
  /**
   * Components that change on night mode:
   * Background -  image
   * Slider - stroke and fill
   */

  return (
    <Container>
      <Background isDark={props.isDark}>
        <img className="wine-bg day-bg" src="/img/wine.png" alt="" />
        <img className="coffee-bg day-bg" src="/coffee.png" alt="" />
      </Background>
      <Content>
        <header>
          <a onClick={() => setView('home')}>
            <h1>cofesta</h1>
          </a>
          <h3>
            {props.isDark ? 'Winebar and event space by night' : 'Flatiron coffeeshop by day'}
            <Slider select={props.toggleNight} isDark={props.isDark} />
          </h3>
        </header>
        <Nav setView={setView} isDark={props.isDark} />
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
