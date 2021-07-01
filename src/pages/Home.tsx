import React from 'react';
import { Main , Wrapper, Content} from './components/Components';
import Hero from './components/Hero';
import Text from './components/Text';
import TextImage from './components/TextImage';
import House from '../imgs/house1.JPG';
import Room1 from '../imgs/room1.JPG';
import { roomIngress } from './Rooms';
import { restaurantIngress } from './Restaurang';
import { beachIngress } from './Busua-beach';
import { faBed, faUtensils, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';


const text1 = 'Welcome to Laughing Goat Ghana, located only a calm and relaxing 3 minutes walk to the beautiful beach of Busua.';
const reviewText = '"This hotel is a hidden gem! It made my travel experience that much better. After traveling such a long distance this was the perfect place to stay. I felt safe, comfortable and I had so much fun..." - Read more';
const reviewLink = 'https://www.tripadvisor.com/ShowUserReviews-g479202-d15004144-r622668656-Laughing_Goat_Ghana-Busua_Western_Region.html?m=19905'
function Home() {
  return (
    <Main>
       <Hero src={ House } href="restaurant" text={ text1 }/>
       <Wrapper top={ 700 }>
          <Content>
            <Text top text={ reviewText } href={ reviewLink } italic/>
            <TextImage buttonText="Visit our rooms" text={ roomIngress } image={ Room1 } href="rooms" icon={ faBed } />
            <TextImage buttonText="Have a look at the menu"  text={ restaurantIngress } image={ House } right href="restaurant" icon={ faUtensils }/>
            <TextImage  buttonText="Read more" text={ beachIngress } image={ Room1 } href="busua-beach" icon={ faUmbrellaBeach } />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Home;
