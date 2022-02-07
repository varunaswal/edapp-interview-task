import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
    margin: 0; 
    padding: 0;
	}

  * {
    font-family: Helvetica, Arial, sans-serif
  }

  h1, h2 {
    font-weight: 300
  }

  h3 {
    font-weight: 400
  }

  p {
    font-weight: 300
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
