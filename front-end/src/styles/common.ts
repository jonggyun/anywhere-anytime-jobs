import styled from 'styled-components';

import palette from 'styles/palette';

export const CenterAlign = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnderLine = styled.span`
  display: inline-block;
  background-color: ${palette.cyan9};
  height: 0.375rem;
`;

const common = {
  headerHeight: '3.125rem',
};

export default common;
