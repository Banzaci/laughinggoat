import React from 'react';
import styled from 'styled-components';
import { ButtonBlack } from './Button';

const Wrapper = styled.div<{ right?: boolean; top?: boolean; }>`
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  margin: ${props => props.top ? '88px 0 44px 0' : '44px 0'};

`;

const Text = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding: 12px;
  color: #333;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  flex: 1;
  width: 50%;
  padding: 12px;
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
        <Text>
          { text }
          { href && <ButtonWrapper>
            <ButtonBlack href={ href }>Read more</ButtonBlack>
          </ButtonWrapper>}
        </Text>
      </Wrapper>
  )
}

export default TextImage;
