import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import About from '../components/About/About';
import Nav from '../components/Nav/Nav';
import Slider from '../components/Slider/Slider';
import Background from '../components/Background/Background';

interface Props {
  toggleNight: () => {};
  isDark: boolean;
}
interface SubcontentProps {
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

const Content = styled.main`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -15%;
  z-index: 1;
`;

const HeaderLogo = styled.header`
  display: flex;
  align-items: baseline;
  font-family: 'Rock Salt';
  h1 {
    font-size: 60px;
  }
  h3 {
    font-size: 20px;
    font-family: 'Open Sans Condensed';
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    width: 275px;
    justify-content: space-between;
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

  return (
    <Container>
      <Head>
        <title>CofestaNYC</title>
      </Head>
      <Background isDark={props.isDark} />
      <Content>
        <HeaderLogo>
          <a onClick={() => setView('home')}>
            <h1>cofesta</h1>
          </a>
          <h3>
            {props.isDark ? 'Winebar and event space by night' : 'Flatiron coffeeshop by day'}
            <Slider select={props.toggleNight} isDark={props.isDark} />
          </h3>
        </HeaderLogo>
        <Nav setView={setView} isDark={props.isDark} view={view} />
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
