import styled from 'styled-components';

interface Props {
  show: boolean;
}

const Container = styled.section`
  height: ${(p: Props) => (p.show ? 300 : 0)}px;
  color: ${(p) => p.theme.strokeColor};
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
  }
`;

function Map(props: { show: boolean }) {
  return (
    <Container show={props.show}>
      <iframe
        width="550"
        height="550"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsZFSxqVZwokRnVkkCjyjDSA&key=
            AIzaSyCkeBgkOOiF7-HZIV88SPwBW78D6_Veaz0"
        allowFullScreen
      ></iframe>
      <p>33 W 26th St, New York, NY 10010</p>
    </Container>
  );
}

export default Map;
