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
  priceSurfcampWeek: number,
  priceSurfcampWeekend: number,
  rooms?: boolean;
  surfcamp?: boolean;
}

interface Props {
  textImages: TextImages[];
  rooms?: boolean;
  surfcamp?: boolean;
}

const calculatePriceWithDiscount = (price: number, no:number) => Math.round(price * .82) * no;

const calculatePriceWithSurfcamp = (price: number, priceSurfcampWeek: number, no:number) => calculatePriceWithDiscount(price, no) + priceSurfcampWeek;

const TextImageBlock = ({ image, ingress, capacity, price, rooms, surfcamp, priceSurfcampWeek, priceSurfcampWeekend }: TextImages, index:number) => {
  return (
    <TextImageConatiner key={ index }>
      <ImageWrapper>
        <Image src={ image } />
      </ImageWrapper>
      <Text>Max capacity: { capacity }.</Text>
      <Ingress>{ ingress }</Ingress>
      { rooms && <Price>Price per night: { price } including breakfast.</Price>}
      { rooms && <WeeklyPrice>Price for 7 nights: { calculatePriceWithDiscount(price, 7)} including breakfast.</WeeklyPrice>}
      { surfcamp && <Price>{ calculatePriceWithSurfcamp(price, priceSurfcampWeekend, 2)  } surf package weekend (3 days of surfing and 2 nights of accomondation.).</Price>}
      { surfcamp && <Price>{ calculatePriceWithSurfcamp(price, priceSurfcampWeek, 7) } surf package week (6 days) days of surfing and 7 nights of accomondation.</Price>}
    </TextImageConatiner>
  );
}

function ThreeImages({ textImages, rooms, surfcamp }: Props) {
  const imagesWithText = textImages.map(textImage => <TextImageBlock {...textImage} rooms={ rooms } surfcamp={ surfcamp }/>);
  return(
    <Wrapper>
      { imagesWithText }
    </Wrapper>
  )
}

export default ThreeImages;
