import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ top?: boolean; smallMargin?: boolean;  left?: boolean; }>`
  display: flex;
  margin: ${props => props.top ? '60px auto 20px auto' : props.smallMargin ? '12px auto' : '60px auto'};
  justify-content: ${props => props.left ? 'flex-start' : 'center' };
  align-items: center;
  width: 600px;
`;

const Paragraph = styled.p<{ italic?: boolean; left?: boolean;}>`
  position: relative;
  padding: 12px;
  color: #555;
  max-width: 600px;
  margin: 0;
  padding: 0;
  line-height: 28px;
  text-align: ${props => props.left ? 'italic' : 'center' };
  font-style: ${props => props.italic ? 'italic' : 'normal' };
  font-size: 16px;

  h2 {
    padding: 0;
    margin: 0;
    font-size: 18px;
  }
`;

const Href = styled.a<{ top?: boolean; }>`
  text-decoration: none;
`;

interface Props {
  text: string;
  href?: string;
  top?: boolean;
  smallMargin?: boolean;
  italic?: boolean;
  left?: boolean;
}

function Text({ text, top, italic, href, smallMargin, left }: Props) {
  return(
      <Wrapper top={ top } smallMargin={ smallMargin } left={ left }>
        { href ? <Href href={ href } rel="noreferrer" target="_blank"><Paragraph left={ left } italic={ italic }>
          { text }
        </Paragraph></Href> : <Paragraph italic={ italic } left={ left } dangerouslySetInnerHTML={{__html: text}} />}
      </Wrapper>
  )
}

export default Text;
