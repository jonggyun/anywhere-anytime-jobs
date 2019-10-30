import React from 'react';
import styled from 'styled-components';
import palette from 'styles/palette';

interface WrapperProps {
  type: string;
}
const Wrapper = styled.span<WrapperProps>`
  padding: 0.25rem 0.875rem;
  margin-left: 0.3125rem;
  border-radius: 1rem;
  background-color: ${({ type }) =>
    type === 'anywhere' ? `${palette.blue9}` : `${palette.blue6}`};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${palette.gray0};
`;

interface BadgeProps {
  name: string;
}
const Badge: React.FC<BadgeProps> = ({ name }) => {
  return <Wrapper type={name}>{name}</Wrapper>;
};

export default Badge;
