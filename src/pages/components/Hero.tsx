import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonWhite } from './Button';
import House from './house.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 350px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img<{ src: any; }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface Props {
  src: unknown;
  href?: string;
}

function Hero({ src, href }: Props) {
  const [ source, setSource ] = useState('')

  useEffect(() => {
      const img = new Image()
      img.src = House
      img.onload = () => setSource(House)
  }, [src])

  return(
    <Wrapper>
      <Img src={ source } />
      { href && <ButtonWrapper>
          <ButtonWhite href={ href } large>Read more</ButtonWhite>
        </ButtonWrapper>}
    </Wrapper>
  )
}

export default Hero;
