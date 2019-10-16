import { useState } from 'react';
import styled from 'styled-components';

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
  padding-bottom: 150px;
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
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Temp = styled.div`
  height: 400px;
  width: 200px;
  background-color: blue;
`;

const Home = () => {
  const [view, setView] = useState('home');
  const handleClick = (e: any) => {
    setView(e.target.dataset.id);
  };
  return (
    <Container>
      <Content>
        <header>
          <h1>COFESTA</h1>
          <h3>33 w. 26th st.</h3>
        </header>
        <Links onClick={handleClick}>
          <a data-id="about">about</a>
          <a data-id="map">map</a>
          <a data-id="menu">menu</a>
          <a data-id="contact">contact</a>
        </Links>
        <Subcontent open={view !== 'home'}>
          <Temp></Temp>
        </Subcontent>
      </Content>
    </Container>
  );
};

export default Home;
