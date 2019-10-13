import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../utils/cssTheme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway|Cabin|Cormorant+Garamond&display=swap');
body, html{
  font-family: sans-serif;
  max-width: 100vw;
  background-color: black;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: white;
    :visited {
      color:  white;
    }
}
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
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
