import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Router />
      </>
    </ThemeProvider>
  );
}
export default App;
