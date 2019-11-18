import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../utils/cssTheme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Special+Elite&display=swap');
body, html{
  font-family: 'Open Sans Condensed';
  max-width: 100vw;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  cursor: pointer;
  color: black;
    :visited {
      /* color:  black; */
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
