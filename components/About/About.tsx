import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  div {
    height: 100%;
    width: auto;
    background-color: black;
  }
`;

function About() {
  return (
    <Container>
      <div></div>
      <p>
        Welcome to Cofesta. Come in and grab a drink, whether it be coffee or a glass of wine. At
        Cofesta, we pride ourselves in our high quality ingredients. Our dishes are made with
        ingredients fresh from the local farmer's market and never frozen. Our coffee is from{' '}
        <a href="https://www.devocion.com" target="_blank">
          Devoción
        </a>{' '}
        where beans are delivered from the farms in Columbia to us in less than 30 days.
      </p>
      <p></p>
    </Container>
  );
}

export default About;
