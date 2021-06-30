import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import House from './house.jpg';

const Wrapper = styled.div<{ src: any; }>`
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

interface Props {
  src: unknown;
}

function Hero({ src }: Props) {
  const [ source, setSource ] = useState('')

  useEffect(() => {
      const img = new Image()
      img.src = House
      img.onload = () => setSource(House)
  }, [src])

  return(
      <Wrapper src={ source } />
  )
}

export default Hero;
