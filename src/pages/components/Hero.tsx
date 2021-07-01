import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonWhite } from './Button';
import House from '../../imgs/house.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 490px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParagraphWrapper = styled.div`
  position: absolute;
  top: 280px;
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

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  line-height: 38px;
  text-align: center;
  color: white;
  font-size: 24px;
  max-width: 600px;
`;

interface Props {
  src: unknown;
  text?: string;
  href?: string;
}

function Hero({ src, href, text }: Props) {
  const [ source, setSource ] = useState('')

  useEffect(() => {
      const img = new Image()
      img.src = House
      img.onload = () => setSource(House)
  }, [src])

  return(
    <Wrapper>
      <Img src={ source } />
      { text && <ParagraphWrapper><Paragraph>
          { text }
        </Paragraph></ParagraphWrapper>}
      { href && <ButtonWrapper>
          <ButtonWhite href={ href } large>Read more</ButtonWhite>
        </ButtonWrapper>}
    </Wrapper>
  )
}

export default Hero;
