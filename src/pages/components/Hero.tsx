import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonWhiteNoCorners } from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 370px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img<{ src: any; }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Text = styled.p`
  text-align: center; 
  color: white;
  max-width: 450px;
  line-height: 24px;
  font-size: 18px;
  margin-top: 32px;
`;

interface Props {
  src: string;
  text?: string;
  href?: string;
}

function Hero({ src, href, text }: Props) {
  const [ source, setSource ] = useState('')

  useEffect(() => {
      const img = new Image()
      img.src = src;
      img.onload = () => setSource(src);
  }, [src])

  return(
    <Wrapper>
      <Img src={ source } />
      { href && <ButtonWrapper>
          <ButtonWhiteNoCorners href={ href } large>BOOK YOUR SURF EXPERIENCE</ButtonWhiteNoCorners>
          <Text>{ text }</Text>
        </ButtonWrapper>
      }
    </Wrapper>
  )
}

export default Hero;
