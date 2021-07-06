import React from 'react';
import styled from 'styled-components';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Content, FontWrapper } from './pages/components/Components';
import Text from './pages/components/Text';

const FooterWrapper = styled.footer`
  display: flex;
  height: 300px;
  background-color: #335855;
  width: 100%;
  justify-content: center;

`;
const Header = () => {
  return (
    <FooterWrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faSun } size="3x" color="white" /></FontWrapper>
          <Text white smallMargin text="Feel free to send us an email or give us a call." />
        </Content>
    </FooterWrapper>
  )
}

export default Header;