import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  width: 600px;
`;

const Text = styled.span`
  color: #555;
  margin: 0;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
`;

interface Props {
  item: string;
  price: number;
}

function MenuItem({ item, price }: Props, key: number) {
  return(
      <Wrapper key={ key }>
        <Text>{ item } { price }</Text>
      </Wrapper>
  )
}

export default MenuItem;
