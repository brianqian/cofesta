import { useState } from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import About from '../components/About/About';

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

const Content = styled.main`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${(p: Props) => (p.open ? 150 : 0)}px;
  header {
    display: flex;
    align-items: baseline;
    font-family: 'Special Elite';
    h1 {
      font-size: 60px;
    }
    h3 {
      font-size: 24px;
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

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  a {
    font-size: 24px;
    cursor: pointer;
    text-decoration: underline;
    position: relative;
  }
  img {
    height: 12px;
    width: 12px;
    position: absolute;
    top: 0;
    right: -12px;
  }
`;

const Home = () => {
  const [view, setView] = useState('home');

  return (
    <Container>
      <Content open={view === 'home'}>
        <header>
          <h1 onClick={() => setView('home')}>cofesta</h1>
          <h3>33 w. 26th st.</h3>
        </header>
        <Links>
          <a onClick={() => setView('about')}>about</a>
          <a onClick={() => setView('map')}>map</a>
          <a onClick={() => setView('contact')}>contact</a>
          <a href="/img/menu/menu.pdf" target="_blank">
            menu
            <img src="/img_569296.png"></img>
          </a>
        </Links>
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
