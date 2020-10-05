import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/lightTheme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
