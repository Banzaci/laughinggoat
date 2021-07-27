import React from 'react';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Main , Wrapper, Content} from './components/Components';
import Text from './components/Text';
import Hero from './components/Hero';
import ThreeImages from './components/ThreeImages';
import Yard from '../imgs/yeard.jpg';
import styled from 'styled-components';
import { roomsRow1, roomsRow2 } from './Rooms';

export const FontWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 44px 0 12px 0;
`;

const reviewText2 = 'Our surf package includes <strong>1hr with a surf instructor + 1hr of free surfing a day</strong>. You can choose between the weekend package, or the weekly package. Breakfast can be added for an extra GH₵30.';

function Rooms() {
  return (
    <Main>
       <Hero src={ Yard } />
       <Wrapper>
          <Content>
            <FontWrapper><FontAwesomeIcon icon={ faBed } size="3x" color="#666" /></FontWrapper>
            <Text smallMargin left text={ reviewText2 }/>
            <ThreeImages textImages={ roomsRow1 } surfcamp />
            <ThreeImages textImages={ roomsRow2 } surfcamp />
          </Content>
       </Wrapper>
    </Main>
  );
}
export default Rooms;
