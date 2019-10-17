import styled from 'styled-components';

interface Props {
  show: boolean;
}

const Container = styled.section`
  height: ${(p: Props) => (p.show ? 300 : 0)}px;
  background-color: white;
  color: black;
  text-align: center;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const MapContainer = styled.div`
  flex: 1;
`;

function Map(props: { show: boolean }) {
  return (
    <Container show={props.show}>
      <Content>
        <MapContainer>
          <iframe
            width="400"
            height="400"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsZFSxqVZwokRnVkkCjyjDSA&key=
            AIzaSyCkeBgkOOiF7-HZIV88SPwBW78D6_Veaz0"
            allowFullScreen
          ></iframe>
        </MapContainer>
      </Content>
    </Container>
  );
}

export default Map;
