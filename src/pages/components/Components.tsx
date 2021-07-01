import styled from 'styled-components';

export const Main = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div<{ top: number }>`
  background-color: white;
  position: absolute;
  top: ${props => props.top ?? 0}px;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.article`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
`;