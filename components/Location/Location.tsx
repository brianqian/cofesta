import styled from 'styled-components';

const Container = styled.section`
  min-height: 300px;
  background-color: white;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  border: 1px solid green;
  display: flex;
  flex: 1;
`;

const Text = styled.div`
  flex: 1;
  border: 1px solid black;
`;

const Map = styled.div`
  flex: 1;
`;

function Location() {
  return (
    <Container>
      <header>
        <h1>Hours & Location</h1>
      </header>
      <Content>
        <Text>33 W 26th St, New York, NY 10010</Text>
        <Map>
          <iframe
            width="600"
            height="450"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsZFSxqVZwokRnVkkCjyjDSA&key=
            AIzaSyCkeBgkOOiF7-HZIV88SPwBW78D6_Veaz0"
            allowFullScreen
          ></iframe>
        </Map>
      </Content>
    </Container>
  );
}

export default Location;
