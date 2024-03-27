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

export interface SurfImages {
  image: string;
  ingress?: string,
  capacity?: string,
  price?: number,
  priceHighSeason?: number,
  rooms?: boolean;
  surfcamp?: boolean;
}

interface Props {
  images: string[];
}


function ThreeSurfImages({ images }: Props) {
  const imagesWithText = images.map((image, index) => (<ImageWrapper key={ index }>
    <Image src={ image } />
  </ImageWrapper>));
  return(
    <Wrapper>
      { imagesWithText }
    </Wrapper>
  )
}

export default ThreeSurfImages;
