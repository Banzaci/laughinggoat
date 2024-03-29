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
  overflow: hidden;
  
`;

const Image = styled.img`
  height: auto;
  overflow:hidden;
  width: 100%;
  height: 100%;
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
  font-size: 14px;
`;

export interface TextImages {
  image: string;
  ingress?: string,
  capacity?: string,
  price?: number,
  priceHighSeason?: number,
  rooms?: boolean;
  surfcamp?: boolean;
}

interface Props {
  textImages: TextImages[];
  rooms?: boolean;
  surfcamp?: boolean;
}

const TextImageBlock = ({ image, ingress, capacity, price, rooms, surfcamp, priceHighSeason }: TextImages, index:number) => {
  return (
    <TextImageConatiner key={ index }>
      <ImageWrapper>
        <Image src={ image } />
      </ImageWrapper>
      {capacity && <Text>Max capacity: { capacity }.</Text>}
      {ingress && <Ingress>{ ingress }</Ingress>}
      { rooms && <Price>1 night ${ price }</Price>}
      { rooms && <Text>High season.</Text>}
      { rooms && <Price>1 night ${ priceHighSeason }</Price>}
    </TextImageConatiner>
  );
}

function ThreeImages({ textImages, rooms, surfcamp }: Props) {
  const imagesWithText = textImages.map((textImage, index) => <TextImageBlock key={index} {...textImage} rooms={ rooms } surfcamp={ surfcamp }/>);
  return(
    <Wrapper>
      { imagesWithText }
    </Wrapper>
  )
}

export default ThreeImages;
