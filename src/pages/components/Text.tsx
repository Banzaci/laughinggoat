import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ top?: boolean; }>`
  display: flex;
  margin: ${props => props.top ? '60px 0 20px 0' : '60px 0'};
  justify-content: center;
`;

const Paragraph = styled.p<{ italic?: boolean; }>`
  position: relative;
  display: flex;
  flex: 1;
  padding: 12px;
  color: #333;
  max-width: 600px;
  margin: 0;
  padding: 0;
  line-height: 28px;
  text-align: center;
  font-style: ${props => props.italic ? 'italic' : 'normal' };
`;

const Href = styled.a<{ top?: boolean; }>`
  text-decoration: none;
`;

interface Props {
  text: string;
  href?: string;
  top?: boolean
  italic?: boolean
}

function Text({ text, top, italic, href }: Props) {
  return(
      <Wrapper top={ top }>
        { href ? <Href href={ href } rel="noreferrer" target="_blank"><Paragraph italic={ italic }>
          { text }
        </Paragraph></Href> : <Paragraph italic={ italic }>
          { text }
        </Paragraph>}
      </Wrapper>
  )
}

export default Text;
