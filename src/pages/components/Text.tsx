import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ top?: boolean; }>`
  display: flex;
  margin: ${props => props.top ? '88px 0 44px 0' : '44px 0'};
  justify-content: center;
`;

const Paragraph = styled.p`
  position: relative;
  display: flex;
  flex: 1;
  padding: 12px;
  color: #333;
  max-width: 500px;
  margin: 0;
  padding: 0;
  line-height: 28px;
  text-align: center;
`;

interface Props {
  text: string;
  top?: boolean
}

function Text({ text, top }: Props) {
  return(
      <Wrapper top={ top }>
        <Paragraph>
          { text }
        </Paragraph>
      </Wrapper>
  )
}

export default Text;
