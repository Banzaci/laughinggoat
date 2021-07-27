import React from 'react';
import { Wrapper, Content} from './components/Components';
import Hero from './components/Hero';
import Text from './components/Text';
import TextImage from './components/TextImage';
import House from '../imgs/house.jpg';
import Beach from '../imgs/beach.jpg';
import Yard from '../imgs/yeard.jpg';
import { roomIngress } from './Rooms';
import { restaurantIngress } from './Restaurang';
import { beachIngress } from './BusuaBeach';
import { faBed, faUtensils, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';


const text1 = ['Warm water all year around with great waves for both beginners and advanced.'];
const reviewText = '"This hotel is a hidden gem! It made my travel experience that much better. After traveling such a long distance this was the perfect place to stay. I felt safe, comfortable and I had so much fun..." - Read more reviews from Tripadvisor';
const reviewLink = 'https://www.tripadvisor.com/ShowUserReviews-g479202-d15004144-r622668656-Laughing_Goat_Ghana-Busua_Western_Region.html?m=19905'
function Home() {
  return (
    <>
       <Hero fullHeight src={ Yard } href="surf-camp" texts={ text1 } buttonText="BOOK YOUR SURF EXPERIENCE"/>
       <Wrapper>
          <Content>
            <Text top text={ reviewText } href={ reviewLink } italic/>
            <TextImage buttonText="Visit our rooms" text={ roomIngress } image={ House } href="rooms" icon={ faBed } />
            <TextImage buttonText="Have a look at the menu"  text={ restaurantIngress } image={ Yard } right href="restaurant" icon={ faUtensils }/>
            <TextImage  buttonText="Read more" text={ beachIngress } image={ Beach } href="busua-beach" icon={ faUmbrellaBeach } />
          </Content>
       </Wrapper>
    </>
  );
}
export default Home;
