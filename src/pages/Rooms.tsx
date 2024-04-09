import { faBed } from '@fortawesome/free-solid-svg-icons';
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

export const roomIngress = [
  'Our rooms are clean, bright and safe, and you can choose between single rooms with shared batroom or double bedrooms with a private batroom.',
  'High season is 22nd of December to 12th of January, 1st of March to 5th of April',
];

export const roomsRow1: TextImages[] = [
  {
    ingress: 'Room on first floor with one double bed and private bathroom.',
    capacity: '2 people',
    price: 24,
    image: Room1,
    priceHighSeason: 30
  },
  {
    ingress: 'Room with one double bed, a bunker bed and private bathroom.',
    capacity: '3 people',
    price: 36,
    image: Room2,
    priceHighSeason: 45
  },
  {
    ingress: 'Room on first floor with one single bed with private bathroom.',
    capacity: '1 person',
    price: 20,
    image: Room3,
    priceHighSeason: 24
  }
];

export const roomsRow2: TextImages[] = [
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 24,
    image: Room4,
    priceHighSeason: 30
  },
  {
    ingress: 'Room on second floor with one double bed with outside private bathroom.',
    capacity: '2 people',
    price: 15,
    image: Room5,
    priceHighSeason: 20
  },
  {
    ingress: 'Room on second floor with one double bed and private bathroom',
    capacity: '2 people',
    price: 24,
    image: Room6,
    priceHighSeason: 30
  }
];

function Rooms() {
  return (
    <Main>
       <Hero src={ Yard }/>
       <Wrapper>
          <Content>
            <FontWrapper><FontAwesomeIcon icon={ faBed } size="3x" color="#666" /></FontWrapper>
            <Text smallMargin text={ roomIngress[0] }/>
            <Text smallMargin text={ roomIngress[1] }/>
            <Text smallMargin text={ roomIngress[2] }/>
            <ThreeImages textImages={ roomsRow2 } rooms />
            <ThreeImages textImages={ roomsRow1 } rooms />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Rooms;
