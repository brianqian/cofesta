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
    h3 {
      font-size: 18px;
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
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Home = () => {
  const [view, setView] = useState('home');

  return (
    <Container>
      <Content open={view === 'home'}>
        <header>
          <h1 onClick={() => setView('home')}>COFESTA</h1>
          <h3>33 w. 26th st.</h3>
        </header>
        <Links>
          <a onClick={() => setView('about')}>about</a>
          <a onClick={() => setView('map')}>map</a>
          <a onClick={() => setView('contact')}>contact</a>
          <a href="/static/img/menu/menu.pdf" target="_blank">
            menu
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
