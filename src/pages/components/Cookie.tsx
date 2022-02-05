import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

function Text() {
  return(
      <Wrapper>
        Coockie
      </Wrapper>
  )
}

export default Text;
