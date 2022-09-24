import React from 'react';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageWrapper, Image, Main, Wrapper, Content, FontWrapper } from './components/Components';

import Text from './components/Text';
import Hero from './components/Hero';
import Yard from '../imgs/yeard.jpg';
import Map from '../imgs/map.png';
import styled from 'styled-components';

function Contact() {
  return (
    <Main>
      <Hero src={ Yard }/>
      <Wrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faMobileAlt } size="3x" color="#666" /></FontWrapper>
          <Text smallMargin text="Payments can be done by either banktransfer, cash at site or BTC." />
          <MapWrapper>
            <ImageWrapper><Image src={ Map } /></ImageWrapper>
          </MapWrapper>
          <Text smallMargin text="Feel free to send us an laughinggoatghana (@) gmail (.) com or<br>give us a call on <a href='tel:+233 54 175 5533'>+233 54 175 5533</a>." />
          <Text smallMargin text="The Laughing Goat, R357+FHV, Dixcove<br>Agona Ahanta 80, Busua, Ghana" />
        </Content>
      </Wrapper>
    </Main>
  );
}
export default Contact;

const MapWrapper = styled.div`
  display: flex;
  max-width: 400px;
  width: 80%;
  margin: 0 auto;
`;
