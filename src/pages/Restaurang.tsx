import React from 'react';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content, FontWrapper } from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import MenuItem from './components/MenuItem';
import Yard from '../imgs/yeard.jpg';
import styled from 'styled-components';

export const Food = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
`;

export const restaurantIngress = [
  'We have a passion for cooking and server plant based food and work with seasonal raw materials.',
  'All our food is made with lots of passion for our environment, animals and guests.'
];

const breakfast = [
  {
    item: 'Pancakes',
    price: 20,
  }
]

function Restaurang() {
  const breakfastItems = breakfast.map(MenuItem);
  return (
    <Main>
      <Hero src={ Yard }/>
      <Wrapper>
        <Content>
          <FontWrapper><FontAwesomeIcon icon={ faUtensils } size="3x" color="#666" /></FontWrapper>
          <Text smallMargin left text={ restaurantIngress[0] }/>
          <Food>{ breakfastItems }</Food>
        </Content>
      </Wrapper>
    </Main>
  );
}
export default Restaurang;
