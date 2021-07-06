import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 44px;
  & > div {
    margin-right: 2%;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const TextImageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 31%;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Image = styled.img`
  display: flex;
  height: auto;
  overflow:hidden;
`;

const Ingress = styled.p`
  display: flex;
  margin: 4px 0 12px;
  color: #666;
  font-size: 16px;
`;
const Text = styled.span`
  display: flex;
  margin: 12px 0;
  color: #333;
  font-size: 14px;
`;

const Price = styled.span`
  display: flex;
  margin: 4px 0;
  color: #666;
  font-size: 16px;
`;

const WeeklyPrice = styled.span`
  display: flex;
  margin: 4px 0;
  color: #666;
  font-size: 16px;
`;

export interface TextImages {
  image: string;
  ingress: string,
  capacity: string,
  price: number,
}

interface Props {
  textImages: TextImages[];
}

const calculateWeeklyPrice = (price: number) => Math.round(price * .82) * 7;

const TextImageBlock = ({ image, ingress, capacity, price }: TextImages, index:number) => {
  return (
    <TextImageConatiner key={ index }>
      <ImageWrapper>
        <Image src={ image } />
      </ImageWrapper>
      <Text>Max capacity: { capacity }.</Text>
      <Ingress>{ ingress }</Ingress>
      <Price>Price per night: ${ price } including breakfast.</Price>
      <WeeklyPrice>Price for 7 nights: ${ calculateWeeklyPrice(price)} including breakfast.</WeeklyPrice>
    </TextImageConatiner>
  );
}

function ThreeImages({ textImages }: Props) {
  const imagesWithText = textImages.map(TextImageBlock);
  return(
    <Wrapper>
      { imagesWithText }
    </Wrapper>
  )
}

export default ThreeImages;
