import React from 'react';
import { Main , Wrapper, Content} from './components/Components';
import Hero from './components/Hero';
import Text from './components/Text';
import TextImage from './components/TextImage';
import House from './components/house.jpg';

const text1 = 'Welcome to';

function Home() {
  return (
    <Main>
       <Hero src={ House } href="restaurant" text={ text1 }/>
       <Wrapper top={ 600 }>
          <Content>
            <Text top text={ text1 }/>
            <TextImage text={ text1 } image={ House } href="rooms" />
            <TextImage text={ text1 } image={ House } right href="restaurant"/>
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Home;
