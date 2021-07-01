import React from 'react';
import styled from 'styled-components';
import { ButtonGrey } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div<{ right?: boolean; top?: boolean; }>`
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  margin: ${props => props.top ? '80px 0 40px' : '40px 0'};
  max-height: 480px;
  overflow: hidden;
`;

const TextWrapper = styled.div<{ grey?: boolean; }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 44px;
  margin: 0 8px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.grey ? '#f1f1f1' : 'white' };
  color: ${props => props.grey ? '#333' : '#666' };
  border-radius: 8px;
`;

const Text = styled.p`
  margin: 6px 0 0 0;
  line-height: 28px;
`;

const TextContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 32px 0;
  padding: 0 24px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  flex: 1;
  width: 50%;
  overflow: hidden;
  border-radius: 8px;
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
      <Image src={ image } />
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
