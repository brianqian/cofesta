import styled from 'styled-components';

const Container = styled.div``;

function Menu() {
  return (
    <Container>
      <p>
        Download a PDF version{' '}
        <a href="/static/img/menu/menu.pdf" download>
          here
        </a>
      </p>
    </Container>
  );
}

export default Menu;
