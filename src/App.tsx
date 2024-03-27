import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = React.lazy(() =>  import('./pages/Home'));
const Rooms = React.lazy(() =>  import('./pages/Rooms'));
const BusuaBeach = React.lazy(() =>  import('./pages/BusuaBeach'));
const Contact = React.lazy(() =>  import('./pages/Contact'));
const Surfing = React.lazy(() =>  import('./pages/SurfCamp'));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Loader = styled.div`
  display: flex;
  align-items:center ;
  justify-content:center ;
`;

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        
          <Wrapper>
              <Router>
            <Main>
              <React.Suspense fallback={<Loader>Loading...</Loader>}>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/rooms" component={ Rooms } />
                  <Route exact path="/busua-beach" component={ BusuaBeach } />
                  <Route path="/surfing" component={ Surfing } />
                  <Route path="/contact" component={ Contact } />
                  </Switch>
                </React.Suspense>
            </Main>
            <Header/>
            <Footer/>
                </Router>
          </Wrapper>
        
      </>
    </ThemeProvider>
  );
}
export default App;