import React from 'react';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content,FontWrapper } from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import Yard from '../imgs/yeard.jpg';
import surf1 from '../imgs/surf1.JPG';
import surf2 from '../imgs/surf2.jpg';
import surf3 from '../imgs/surf3.JPG';
import surf4 from '../imgs/surf4.jpg';
import surf5 from '../imgs/surf5.jpg';
import surf6 from '../imgs/surf6.jpg';
import prices from '../imgs/prices.png';
import ThreeSurfImages from './components/ThreeSurfImages';

const roomIngress = 'Dive into the waves and experience the thrill of surfing under the Ghanaian sun. Whether you travel solo or with company, whether you are a seasoned rider or a total beginner, at West Coast Surf you can choose personalized lessons or group sessions, all measured to your level. Book your lessons together with your stay in The Laughing Goat, and enjoy special prices at the surf school!';
export const roomsRow1: any[] = [surf1, surf2, surf3];
export const roomsRow2: any[] = [surf4, surf5, surf6, prices];
function SurfCamp() {
  return (
    <Main>
       <Hero src={ Yard }/>
       <Wrapper>
          <Content>
            <FontWrapper><FontAwesomeIcon icon={ faWater } size="3x" color="#666" /></FontWrapper>
            <Text smallMargin text={ roomIngress }/>
            <ThreeSurfImages images={ roomsRow1 } />
            <ThreeSurfImages images={ roomsRow2 } />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default SurfCamp;
