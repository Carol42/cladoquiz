import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Fraunces', serif;
    font-size: 1em;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://dnacentre.co.uk/wp-content/uploads/2016/07/dna-services.png" />
        <meta property="og:url" content="https://cladoquiz.carol42.vercel.app/" />
        <meta property="og:title" content="CladoQuiz" />
        <meta property="og:description" content="Teste seus conhecimentos sobre Cladística." />
        <meta property="og:image" content="https://image.freepik.com/free-photo/creative-biological-background-dna-structure-dna-molecule-green-background_99433-48.jpg" />

        <meta property="twitter:url" content="https://cladoquiz.carol42.vercel.app/" />
        <meta property="twitter:title" content="CladoQuiz" />
        <meta property="twitter:description" content="Teste seus conhecimentos sobre Cladística." />
        <meta property="twitter:image" content="https://image.freepik.com/free-photo/creative-biological-background-dna-structure-dna-molecule-green-background_99433-48.jpg" />

        <title>CladoQuiz</title>
      </Head>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
    </>
  )
}
