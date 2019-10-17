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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ducimus hic, impedit
        recusandae accusamus asperiores veritatis ullam, sed, architecto officiis maxime error nihil
        magni unde molestiae voluptates repudiandae nisi vero. Tempora, corporis, molestias beatae,
        assumenda dolor quibusdam suscipit fugiat iure veniam eveniet culpa eaque vitae similique
        delectus consequatur aliquam maxime?
      </p>
    </Container>
  );
}

export default About;
