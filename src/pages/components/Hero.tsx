import React from 'react';
import styled from 'styled-components';
import House from './house.jpg';

const Wrapper = styled.div`
  background-image: url('${House}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

function Hero() {
  return (
    <Wrapper />
  );
}
export default Hero;
