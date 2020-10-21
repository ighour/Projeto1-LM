import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import theme from './theme/lightTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Invisible Scars" />
        <main>
          <Container>
            <HomePage/>
          </Container>
        </main>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
}

export default App;
