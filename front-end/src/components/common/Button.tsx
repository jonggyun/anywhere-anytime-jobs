import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

const ButtonWrapper = styled.button<{
  widthSize?: string;
}>`
  width: ${({ widthSize }) => widthSize || '100%'};
  margin: 1rem 0;
  padding: 0.625rem 0;
  text-align: center;
  vertical-align: middle;
  font-size: 1.125rem;
  font-weight: 900;
  color: #fff;
  outline: none;
  border: none;
  background-color: ${palette.cyan9};
  &:hover {
    cursor: pointer;
    background-color: ${palette.cyan6};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${palette.cyan6};
  }
`;

interface ButtonProps {
  widthSize?: string;
  disabled: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, widthSize, disabled }) => {
  return (
    <ButtonWrapper widthSize={widthSize} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
