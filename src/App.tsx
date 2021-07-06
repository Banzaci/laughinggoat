import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SurfCamp from './pages/SurfCamp';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Main>
              <Route exact path="/" component={ Home } />
              <Route path="/rooms" component={ Rooms } />
              <Route path="/busua-beach" component={ Home } />
              <Route path="/restaurant" component={ Home } />
              <Route path="/booking" component={ Home } />
              <Route path="/contact" component={ Home } />
              <Route path="/surf-camp" component={ SurfCamp } />
            </Main>
            <Header/>
            <Footer/>
          </Wrapper>
        </Router>
      </>
    </ThemeProvider>
  );
}
export default App;

/*
<ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Router />
      </>
    </ThemeProvider>
    */
