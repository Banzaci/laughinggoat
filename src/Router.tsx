import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Book from './pages/Book';
import Contact from './pages/Contact';
import BusuaBeach from './pages/Busua-beach';
import Restaurang from './pages/Restaurang';
import { ReactComponent as Logo } from './LOGO_white.svg';

const Navigation = styled.nav`
  position:  fixed;
  display: flex;
  width: 100%;
`;

const Wrapper = styled.ul`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  background-color: white;
`;

const Item = styled.li`
  padding: 0 24px;
  line-height: 24px;
  a {
    color: #DDD;
    text-decoration: none;
    &: hover {
      color: #FFF;
      border-bottom: 4px solid rgba(255, 255, 255, .5);
      padding-bottom: 1px;

    }
  }
`;

const Logga = styled(Logo)`
  transition: all .2s ease;
  width: 80%;
  height: 80%;
  &:hover {
    width: 100%;
    height: 100%;
  }
`;

const LoggaWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

function Router() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/busua-beach">
            <BusuaBeach />
          </Route>
          <Route path="/restaurant">
            <Restaurang />
          </Route>
          <Route path="/booking">
            <Book />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Main>
      <Navigation>
        <Wrapper>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/rooms">Rooms</Link>
          </Item>
          <Item>
            <Link to="/busua-beach">Busua Beach</Link>
          </Item>
          <Item>
            <Link to="/">
              <LoggaWrapper><Logga /></LoggaWrapper>
            </Link>
          </Item>
          <Item>
            <Link to="/restaurant">Restaurant</Link>
          </Item>
          <Item>
            <Link to="/booking">Booking</Link>
          </Item>
          <Item>
            <Link to="/contact">Contact</Link>
          </Item>
        </Wrapper>
      </Navigation>
    </BrowserRouter>
  );
}
export default Router;
