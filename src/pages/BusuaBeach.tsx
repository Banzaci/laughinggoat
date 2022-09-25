import React from 'react';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content, FontWrapper } from './components/Components';
import Hero from './components/Hero';
import Yard from '../imgs/yeard.jpg';
import Surf from '../imgs/surf.jpg';
import View from '../imgs/view.jpg';
import Garbage from '../imgs/garbage.jpg';
import TextImage from './components/TextImage';

export const beachIngress = [
  'With a 3 minutes walk from Laughing Goat you can put you feet in the sand in one of the most beautiful beaches in Ghana.',
  'The water is refreshing and remember to put the sun screen on :)'
];

export const surfIngress = [
  'Not only will you cool down in the Atlantic ocean, but you will also be able to do activities such as surfing or join the locals on a football game on the beach.',
  'The surf season is between April through to August due to the south swells, but you can score waves all year around.'
];

export const garbageIngress = [
  'Be a part of keeping the beach clean. Usually on Saturdays, a group of people walk the beach and collect rubbish',
];

function BusuaBeach() {
  return (
    <Main>
      <Hero src={ Yard }/>
      <Wrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faUmbrellaBeach } size="3x" color="#666" /></FontWrapper>
          <TextImage text={ beachIngress } image={ View } />
          <TextImage text={ surfIngress } image={ Surf } right/>
          <TextImage text={ garbageIngress } image={ Garbage } />
        </Content>
      </Wrapper>
    </Main>
  );
}
export default BusuaBeach;
