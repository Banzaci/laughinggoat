import React from 'react';
import styled from 'styled-components';
import { ButtonGrey } from './Button';

const Wrapper = styled.div<{ right?: boolean; top?: boolean; }>`
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  margin: ${props => props.top ? '88px 0 44px 0' : '44px 0'};
  max-height: 580px;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  position: relative;
  display: flex;
  color: #999;
  margin: 0 0 24px 0;
  line-height: 28px;
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
  padding: 12px;
  overflow: hidden;
`;

interface Props {
  right?: boolean;
  image: string;
  text: string;
  href?: string;
  top?: boolean;
}

function TextImage({ right, image, text, top, href }: Props) {
  return(
    <Wrapper right={ right } top={ top }>
      <Image src={ image } />
      <TextWrapper>
        <Text>
          { text }
        </Text>
        { href && <ButtonWrapper>
            <ButtonGrey href={ href }>Read more</ButtonGrey>
          </ButtonWrapper>}
      </TextWrapper>
    </Wrapper>
  )
}

export default TextImage;
