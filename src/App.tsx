import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Rooms from './pages/Rooms';

const Home = React.lazy(() =>  import('./pages/Home'));
const BusuaBeach = React.lazy(() =>  import('./pages/BusuaBeach'));
const Contact = React.lazy(() =>  import('./pages/Contact'));
const Restaurang = React.lazy(() =>  import('./pages/Restaurang'));

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
        <Router>
          <Wrapper>
            <Main>
              <React.Suspense fallback={<Loader>Loading...</Loader>}>
                <Route exact path="/" component={ Home } />
                <Route path="/rooms" component={ Rooms } />
                <Route path="/busua-beach" component={ BusuaBeach } />
                <Route path="/restaurant" component={ Restaurang } />
                <Route path="/contact" component={ Contact } />
              </React.Suspense>
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