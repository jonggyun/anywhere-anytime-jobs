import React from 'react';
import styled from 'styled-components';

import palette from 'styles/palette';

interface ButtonWrapperProps {
  widthSize?: string;
}
const ButtonWrapper = styled.button<ButtonWrapperProps>`
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
  user-select: none;
  background-color: ${palette.blue9};
  &:hover {
    cursor: pointer;
    background-color: ${palette.blue6};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${palette.blue6};
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
