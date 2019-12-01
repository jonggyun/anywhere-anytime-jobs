import React from 'react';
import styled, { keyframes } from 'styled-components';

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
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.i`
  animation: ${rotate} 0.5s linear infinite;
`;

interface ButtonProps {
  widthSize?: string;
  disabled: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  widthSize,
  disabled,
  isLoading,
  onClick,
}) => {
  return (
    <ButtonWrapper
      type="button"
      widthSize={widthSize}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="fas fa-circle-notch" />}
    </ButtonWrapper>
  );
};

export default Button;

Button.defaultProps = {
  isLoading: false,
  disabled: false,
};
