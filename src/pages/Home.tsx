import React from 'react';
import { Main , Wrapper, Content} from './components/Components';
import Hero from './components/Hero';
import Text from './components/Text';
import TextImage from './components/TextImage';
import House from '../imgs/house1.JPG';
import Room1 from '../imgs/room1.JPG';

const text1 = 'Welcome to Laughing Goat Ghana, located only a calm and relaxing 3 minutes walk to the beautiful beach of Busua.';

function Home() {
  return (
    <Main>
       <Hero src={ House } href="restaurant" text={ text1 }/>
       <Wrapper top={ 700 }>
          <Content>
            <Text top text={ text1 }/>
            <TextImage text={ text1 } image={ Room1 } href="rooms" />
            <TextImage text={ text1 } image={ House } right href="restaurant"/>
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Home;
