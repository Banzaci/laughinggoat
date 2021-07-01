import styled from 'styled-components';

const Button = styled.a<{ large?: boolean; }>`
  cursor: pointer;
  display:inline-block;
  padding:${ props => props.large ? '24px 48px' : '16px 32px'};
  font-size:${ props => props.large ? '24px' : '16px'};
  margin: 0;
  border-radius:8px;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:${ props => props.large ? '500' : '300'};
  text-align:center;
  transition: all 0.2s;
`;

export const ButtonBlack = styled(Button)`
  border:1px solid #000;
  color:#000;
  &:hover {
    color:#999;
    border-color:#999;
  }
`;

export const ButtonGrey = styled(Button)`
  border:1px solid #666;
  color:#666;
  &:hover {
    color:#CCC;
    border-color:#CCC;
  }
`;

export const ButtonWhite = styled(Button)`
  border: 1px solid #FFF;
  color: #FFF;
  &:hover {
    background-color: rgba(255, 180, 0, .9);
    border:1px solid rgba(255, 180, 0, .9);
    transform: scale(1.1);
  }
`;

export const ButtonWhiteNoCorners = styled(ButtonWhite)`
  border-radius:0;
`;
