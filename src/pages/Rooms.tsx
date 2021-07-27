import React from 'react';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content, FontWrapper } from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import ThreeImages, { TextImages } from './components/ThreeImages';
import Room1 from '../imgs/room1.jpg';
import Room2 from '../imgs/room2.jpg';
import Room4 from '../imgs/room6.JPG';
import Room5 from '../imgs/room5.jpg';
import Room6 from '../imgs/room4b.jpg';
import Yard from '../imgs/yeard.jpg';

export const roomIngress = [
  'Our rooms are clean, bright and safe, and you can choose between single rooms with shared batroom or double bedrooms with a private batroom.',
  'The prices are per room, and excluding breakfast. Breakfast is additional GH₵30.'
];

export const roomsRow1: TextImages[] = [
  {
    ingress: 'Room on first floor with one double bed, a bunker bed and private bathroom.',
    capacity: '4 people',
    price: 220,
    image: Room1,
    priceSurfcampWeekend: 270,
    priceSurfcampWeek: 480,
  },
  {
    ingress: 'Room on first floor one regular bed, a bunker bed and private bathroom.',
    capacity: '3 people',
    price: 200,
    image: Room2,
    priceSurfcampWeekend: 270,
    priceSurfcampWeek: 480,
  },
  {
    ingress: 'Room on first floor with one regular bed with shared bathroom.',
    capacity: '1 person',
    price: 100,
    image: Room1,
    priceSurfcampWeekend: 270,
    priceSurfcampWeek: 480,
  }
];

export const roomsRow2: TextImages[] = [
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 170,
    image: Room4,
    priceSurfcampWeekend: 270,
    priceSurfcampWeek: 480,
  },
  {
    ingress: 'Room on second floor with one double bed with shared bathroom.',
    capacity: '2 people',
    price: 120,
    image: Room5,
    priceSurfcampWeekend: 270,
    priceSurfcampWeek: 480,
  },
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 170,
    image: Room6,
    priceSurfcampWeekend: 270,
    priceSurfcampWeek: 480,
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
            <ThreeImages textImages={ roomsRow1 } rooms />
            <ThreeImages textImages={ roomsRow2 } rooms />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Rooms;
