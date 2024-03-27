import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { BrowserRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from './LOGO_white.svg';

const Navigation = styled.nav`
  position:  absolute;
  display: flex;
  width: 100%;
  @media only screen and (min-width : 920px) {
    top: 8px;
  }
`;

const ItemWrapperDesktop = styled.ul`
  display: flex;
`;

const WrapperDesktop = styled.div`
  display: none;
  @media only screen and (min-width : 920px) {
    display: flex;
    height: 200px;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    flex-direction: column;
    align-items: center;
  }
`;

const WrapperMobile = styled.div`
  margin: 12px;
  @media only screen and (min-width : 920px) {
    display: none;
  }
`;

const WrapperMobileContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: ${props => props.isOpen ? 0 : -500 }px;
  background-color: black;
  width: 100%;
  max-width: 498px;
  transition: all .4s;
  padding: 12px;
  @media only screen and (min-width : 920px) {
    display: none;
  }
`;

const WrapperMobileNavigation =  styled.ul`
  margin: 40px;
`;

const ItemMobile = styled.li`
  padding: 12px 24px;
  a {
    color: #FFF;
    text-decoration: none;
    &: hover {
      color: #FFF;
    }
  }
`;

const Item = styled.li`
  line-height: 24px;
  font-weight: 400;
  a {
    color: #FFF;
    text-decoration: none;
    padding: 12px 24px 8px;
    &: hover {
      background-color: rgba(255, 180, 0, .9);
    }
  }
`;

const Logga = styled(Logo)`
  transition: all .2s ease;
  width: 100%;
  height: 100%;
`;

const LoggaWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  align-items: flex-end;
  @media only screen and (min-width : 920px) {
    width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  }
`;

function Router() {
  const [ isOpen, setIsOpen ] = useState(false);
  const onToggleMenu = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <Navigation>
        <WrapperMobile>
          <WrapperMobileContainer isOpen={ isOpen }>
          <LoggaWrapper><Logga /></LoggaWrapper>
            <WrapperMobileNavigation>
              <ItemMobile>
                <Link to="/" onClick={ onToggleMenu }>HOME</Link>
              </ItemMobile>
              <ItemMobile>
                <Link to="/rooms" onClick={ onToggleMenu }>ROOMS</Link>
              </ItemMobile>
              <ItemMobile>
                <Link to="/busua-beach" onClick={ onToggleMenu }>BUSUA BEACH</Link>
              </ItemMobile>
              <ItemMobile>
                <Link to="/restaurant" onClick={ onToggleMenu }>RESTAURANT</Link>
              </ItemMobile>
              <ItemMobile>
                <Link to="/booking" onClick={ onToggleMenu }>BOOKING</Link>
              </ItemMobile>
              <ItemMobile>
                <Link to="/surfing" onClick={ onToggleMenu }>SURFING</Link>
              </ItemMobile>
              <ItemMobile>
                <Link to="/contact" onClick={ onToggleMenu }>CONTACT</Link>
              </ItemMobile>
            </WrapperMobileNavigation>
          </WrapperMobileContainer>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={onToggleMenu}
            width={40}
            height={40}
            strokeWidth={2}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />
        </WrapperMobile>
        <WrapperDesktop>
          <LoggaWrapper><Logga /></LoggaWrapper>
          <ItemWrapperDesktop>
            <Item>
              <Link to="/">HOME</Link>
            </Item>
            <Item>
              <Link to="/rooms">ROOMS</Link>
            </Item>
            <Item>
              <Link to="/busua-beach">BUSUA BEACH</Link>
            </Item>
            <Item>
              <Link to="/restaurant">RESTAURANT</Link>
            </Item>
            <Item>
              <Link to="/booking">BOOKINGS</Link>
            </Item>
            <Item>
              <Link to="/surfing">SURFING</Link>
            </Item>
            <Item>
              <Link to="/contact">CONTACT</Link>
            </Item>
          </ItemWrapperDesktop>
        </WrapperDesktop>
      </Navigation>
    </BrowserRouter>
  );
}
export default Router;

/*
<Item>
            <Link to="/">
              <LoggaWrapper><Logga /></LoggaWrapper>
            </Link>
          </Item>
          */
