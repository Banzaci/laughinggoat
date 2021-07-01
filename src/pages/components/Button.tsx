import styled from 'styled-components';

const Button = styled.a<{ large?: boolean; }>`
  cursor: pointer;
  display:inline-block;
  padding:${ props => props.large ? '24px 88px' : '16px 44px'};
  margin: 0;
  border-radius:8px;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
`;

export const ButtonBlack = styled(Button)`
  border:0.1em solid #000;
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
  border:0.1em solid #FFF;
  color:#FFF;
  &:hover {
    color:#DDD;
    border-color:#DDD;
  }
`;