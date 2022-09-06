import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonWhiteNoCorners } from './Button';

const Wrapper = styled.div<{ fullHeight?: boolean; }>`
  width: 100%;
  height: ${props => props.fullHeight ? '100vh' : 'calc(100vh - 20px)'};
  background-color: black;
  @media only screen and (min-width : 920px) {
    height: ${props => props.fullHeight ? '100vh' : 'calc(100vh - 480px)'}; 
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 100px;
  @media only screen and (min-width : 920px) {
    top: 320px;
    left: 0;
    width: 100%;  
  }
`;

const Img = styled.img<{ src: any; }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all smooth .6;
  opacity: .6;
`;
const Text = styled.p`
  color: white;
  max-width: 100%;
  margin: 0;
  line-height: 24px;
  font-size: 18px;
  margin-top: 32px;
  @media only screen and (min-width : 920px) {
    max-width: 550px; 
  }
`;

interface Props {
  src: string;
  texts?: string[];
  href?: string;
  buttonText?: string;
  fullHeight?: boolean; 
}

function Hero({ src, href, texts, buttonText, fullHeight }: Props) {
  const [ source, setSource ] = useState('')

  useEffect(() => {
      const img = new Image()
      img.src = src;
      img.onload = () => setSource(src);
  }, [src])
  const text = texts?.map( t => <Text>{ t }</Text>);
  return(
    <Wrapper fullHeight={ fullHeight }>
      <Img src={ source } />
      <ButtonWrapper>
      { href && <ButtonWhiteNoCorners large margin='12px 0 44px 0'>
        <Link to={href}>{ buttonText }</Link></ButtonWhiteNoCorners> }
        { text }
        </ButtonWrapper>
    </Wrapper>
  )
}

export default Hero;
