import React from 'react';
import styled from 'styled-components';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterWrapper = styled.footer`
  display: flex;
  height: 300px;
  background-color: #335855;
  width: 100%;
  justify-content: center;
  padding: 48px 0;
  margin-top: 48px;
`;
const Header = () => {
  return (
    <FooterWrapper>
     <FontAwesomeIcon icon={ faSun } size="3x" color="white" />
    </FooterWrapper>
  )
}

export default Header;