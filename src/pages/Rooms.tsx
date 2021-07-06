import React from 'react';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content} from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import ThreeImages, { TextImages } from './components/ThreeImages';
import Room1 from '../imgs/room1.JPG';
import Yard from '../imgs/yeard.jpg';
import styled from 'styled-components';

export const FontWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 44px 0 12px 0;
`;

export const roomIngress = [
  'Our rooms are clean, bright and safe, and you can choose between single rooms with shared batroom or double bedrooms with a private batroom.',
  'The prices are per room, and includes breakfast. Prices for a week without surfcamp is included with an 18% discount.'
];

const roomsRow1: TextImages[] = [
  {
    ingress: 'Room on first floor with one double bed, a bunker bed and private bathroom.',
    capacity: '4 people',
    price: 45,
    image: Room1,
  },
  {
    ingress: 'Room on first floor one regular bed, a bunker bed and private bathroom.',
    capacity: '3 people',
    price: 39,
    image: Room1,
  },
  {
    ingress: 'Room on first floor with one regular bed with shared bathroom.',
    capacity: '1 person',
    price: 12,
    image: Room1,
  }
];

const roomsRow2: TextImages[] = [
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 35,
    image: Room1,
  },
  {
    ingress: 'Room on second floor with one double bed with shared bathroom.',
    capacity: '2 people',
    price: 15,
    image: Room1,
  },
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 35,
    image: Room1,
  }
];

function Rooms() {
  return (
    <Main>
       <Hero src={ Yard }/>
       <Wrapper>
          <Content>
            <FontWrapper><FontAwesomeIcon icon={ faBed } size="3x" color="#666" /></FontWrapper>
            <Text smallMargin left text={ roomIngress[0] }/>
            <Text smallMargin left text={ roomIngress[1] }/>
            <ThreeImages textImages={ roomsRow1 } />
            <ThreeImages textImages={ roomsRow2 } />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Rooms;
