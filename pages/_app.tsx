import App from 'next/app';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../utils/cssTheme';
import Nav from '../components/nav';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
body, html{
  font-family: sans-serif;
  max-width: 100vw;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: black;
    :visited {
      color:  black;
    }
    text-decoration: none;
}
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.changeOpacity(theme.tailwind.gray8, 90)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class MyApp extends App {
  // static async getInitialProps({ Component, ctx, ctx: { req, res } }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps: { ...pageProps } };
  //

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Nav />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
