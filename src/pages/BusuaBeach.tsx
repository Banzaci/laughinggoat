import React from 'react';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content, FontWrapper } from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import Yard from '../imgs/yeard.jpg';

export const beachIngress = [
  'With a 3 minutes walk from Laughing Goat you can put you feet in one of the most beautiful beaches in Ghana.',
  'Not only will you cool down in the Atlantic ocean, but you will also be able to do activities such as surfing or join the locals on a football match. '
];

function BusuaBeach() {
  return (
    <Main>
      <Hero src={ Yard }/>
      <Wrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faUmbrellaBeach } size="3x" color="#666" /></FontWrapper>
          <Text smallMargin left text={ beachIngress[0] }/>
        </Content>
      </Wrapper>
    </Main>
  );
}
export default BusuaBeach;
