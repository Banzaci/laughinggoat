import React from 'react';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content, FontWrapper } from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import Yard from '../imgs/yeard.jpg';

function Contact() {
  return (
    <Main>
      <Hero src={ Yard }/>
      <Wrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faMobileAlt } size="3x" color="#666" /></FontWrapper>
          <Text smallMargin left text="Feel free to send us an email or give us a call." />
        </Content>
      </Wrapper>
    </Main>
  );
}
export default Contact;
