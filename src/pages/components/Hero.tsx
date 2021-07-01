import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonWhiteNoCorners } from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 560px;
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
        </ButtonWrapper>}
    </Wrapper>
  )
}

export default Hero;
