import { faBed } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content, FontWrapper } from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import ThreeImages, { TextImages } from './components/ThreeImages';
import Room1 from '../imgs/room1.jpg';
import Room2 from '../imgs/room2.jpg';
import Room3 from '../imgs/room3.jpg';
import Room4 from '../imgs/room6.jpg';
import Room5 from '../imgs/room5.jpg';
import Room6 from '../imgs/room4b.jpg';
import Yard from '../imgs/yeard.jpg';

const OBS = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
  text-align:center;
  margin-top: 48px;
  color: rgba(255, 180, 0, .8);
`;

export const roomIngress = [
  'Our rooms are clean, bright and safe, and you can choose between single rooms with shared batroom or double bedrooms with a private batroom.',
  'The prices are per room, and excluding breakfast. Breakfast is additional GH₵55.',
  'High season is 22nd of December to 12th of January, 1st of March to 5th of April',
];

export const roomsRow1: TextImages[] = [
  {
    ingress: 'Room on second floor with one double bed and private bathroom.',
    capacity: '2 people',
    price: 200,
    image: Room2,
    priceHighSeason: 260
  },
  {
    ingress: 'Room with one double bed, a bunker bed and private bathroom.',
    capacity: '3 people',
    price: 220,
    image: Room1,
    priceHighSeason: 280
  },
  {
    ingress: 'Room on first floor with one regular bed with shared bathroom.',
    capacity: '1 person',
    price: 120,
    image: Room3,
    priceHighSeason: 150
  }
];

// Bookings High Season
// R.1 = 260 $26
// R.2 = 280 $28
// R.3 = 150 $15
// R.4 = 260 $26
// R.5 = 150 $15
// R.6 = 260 $26
// R.7 = 360 $46

// Bookings Low Season
// R.1 = 200 $20
// R.2 = 220 $22
// R.3 = 120 $12
// R.4 = 200 $20
// R.5 = 120 $15
// R.6 = 200 $20
// R.7 = 300 $30


export const roomsRow2: TextImages[] = [
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 200,
    image: Room4,
    priceHighSeason: 260
  },
  {
    ingress: 'Room on second floor with one double bed with shared bathroom.',
    capacity: '2 people',
    price: 120,
    image: Room5,
    priceHighSeason: 200
  },
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 200,
    image: Room6,
    priceHighSeason: 260
  }
];

function Rooms() {
  return (
    <Main>
       <Hero src={ Yard }/>
       <Wrapper>
          <Content>
            <Wrapper>
              <OBS>Please observe. New pricese will come for 2024.</OBS>
            </Wrapper>
            <FontWrapper><FontAwesomeIcon icon={ faBed } size="3x" color="#666" /></FontWrapper>
            <Text smallMargin left text={ roomIngress[0] }/>
            <Text smallMargin left text={ roomIngress[1] }/>
            <Text smallMargin left text={ roomIngress[2] }/>
            <ThreeImages textImages={ roomsRow2 } rooms />
            <ThreeImages textImages={ roomsRow1 } rooms />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Rooms;
