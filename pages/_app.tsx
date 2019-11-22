import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { theme, darkColor } from '../utils/cssTheme';

const lightTheme = { backgroundColor: 'white', strokeColor: '#000111' };
const darkTheme = { backgroundColor: '#050200', strokeColor: 'white' };

export type ThemeType = typeof lightTheme;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Special+Elite|Rock+Salt&display=swap');
body, html{
  font-family: 'Open Sans Condensed';
  max-width: 100vw;
  transition: .35s ease-in;
  background-color: ${(p) => p.theme.backgroundColor};
  color: ${(p) => p.theme.strokeColor};
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  cursor: pointer;
  transition: .25s ease-in;
    :visited {
      color: ${(p) => p.theme.strokeColor}
    }
    :hover {
      color: ${(p) => p.theme.strokeColor};
    }
}
`;

interface MyProps {}

interface MyState {
  isDark: boolean;
  theme: {
    light: ThemeType;
    dark: ThemeType;
  };
}

export default class MyApp extends App<MyProps, MyState> {
  // static async getInitialProps({ Component, ctx, ctx: { req, res } }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps: { ...pageProps } };
  //
  state: MyState = {
    theme: {
      light: lightTheme,
      dark: darkTheme,
    },
    isDark: false,
  };

  toggleNight = () => {
    const { isDark } = this.state;
    this.setState({ ...this.state, isDark: !isDark });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { isDark, theme } = this.state;
    return (
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <>
          <GlobalStyle />
          <Component {...pageProps} isDark={this.state.isDark} toggleNight={this.toggleNight} />
        </>
      </ThemeProvider>
    );
  }
}
