import React from 'react';
import styled from 'styled-components';
import { ButtonGrey } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div<{ right?: boolean; top?: boolean; }>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.top ? '80px 0 40px' : '20px 0'};
  @media only screen and (min-width : 920px) {
    flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    margin: ${props => props.top ? '80px 0 40px' : '40px 0'};
    max-height: 480px;
    overflow: hidden; 
  }
`;

const TextWrapper = styled.div<{ grey?: boolean; }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: ${props => props.grey ? '#f1f1f1' : 'white' };
  color: ${props => props.grey ? '#333' : '#666' };
  @media only screen and (min-width : 920px) {
    flex: 1;
    padding: 44px;
    margin: 0 8px;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.p`
  margin: 6px 0 0 0;
  line-height: 28px;
`;

const TextContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  padding: 0 24px;
  @media only screen and (min-width : 920px) {
    margin: 24px 0 32px 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex: 1;
  max-height: 300px;
  margin-bottom: 24px;
  @media only screen and (min-width : 920px) {
    width: 50%;
    border-radius: 8px;
    max-height: 400px;
  }
`;

interface Props {
  right?: boolean;
  image: string;
  buttonText: string;
  text: string[];
  href?: string;
  top?: boolean;
  grey?: boolean;
  icon?: any;
}

function TextImage({ right, image, text, top, href, grey, icon, buttonText }: Props) {
  const texts = text.map( t => <Text>{ t }</Text>);
  return(
    <Wrapper right={ right } top={ top }>
      <ImageWrapper><Image src={ image } /></ImageWrapper>
      <TextWrapper grey={ grey }>
        <FontAwesomeIcon icon={ icon } size="2x" />
        <TextContainer>
          { texts }
        </TextContainer>
        { href && <ButtonWrapper>
            <ButtonGrey href={ href }>{ buttonText }</ButtonGrey>
          </ButtonWrapper>}
      </TextWrapper>
    </Wrapper>
  )
}

export default TextImage;
