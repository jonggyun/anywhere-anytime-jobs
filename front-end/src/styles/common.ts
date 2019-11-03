import styled, { css } from 'styled-components';

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
  background-color: ${palette.blue9};
  height: 0.375rem;
`;

interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: string;
  marginTop?: string;
  marginBottom?: string;
}
export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  background-color: ${palette.gray2};
  margin-left: 0.3125rem;

  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `};
`;

const common = {
  headerHeight: '6.25rem',
};

export default common;
