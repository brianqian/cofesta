import styled from 'styled-components';

const Container = styled.div`
  font-size: 18px;
  p {
    padding: 0.5rem 0;
  }
`;

function About() {
  return (
    <Container>
      <p>
        Welcome to Cofesta. Come in and grab a drink, whether it be coffee or a glass of wine. At
        Cofesta, we believe that the best food comes from the best ingredients. Between{' '}
        <a href="https://www.devocion.com" target="_blank">
          Devoción
        </a>{' '}
        coffee, Murray's Cheese, and produce straight from the farmer's market, our locally sourced
        selection is unparalleled when it comes to quality fit for New York.
      </p>
      <p>
        Our spacious interior is also available for private gatherings such as meetups, networking
        events, or anything else you can imagine. Prices range depending on party size, length, and
        wine/liquor availability. Pleaes contact us here for a quote.
      </p>
      <p>Business hours: M-F 8am-6pm</p>
      <p> Happy hour: 5pm-7pm</p>
    </Container>
  );
}

export default About;
