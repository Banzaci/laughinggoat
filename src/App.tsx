import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <div>
          <small>Laughing goat ghana</small>
        </div>
      </>
    </ThemeProvider>
  );
}
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export default App;
