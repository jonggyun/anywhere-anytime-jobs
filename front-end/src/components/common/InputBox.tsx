import React from 'react';
import styled, { css } from 'styled-components';

import palette from 'styles/palette';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

interface InputProps {
  isValid: boolean;
}
const Input = styled.input<InputProps>`
  position: relative;
  width: inherit;
  height: 2.5rem;
  outline: none;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  box-sizing: border-box;
  user-select: none;
  border: 1px solid ${palette.gray2};

  ${({ isValid }) =>
    !isValid &&
    css`
      border: 1px solid #e03131;
    `};
  ::placeholder {
    color: ${palette.gray5};
  }
`;

const AlertMessage = styled.span`
  position: absolute;
  color: #e03131;
  font-size: 0.625rem;
  bottom: 0.3125rem;
`;

interface InputBoxProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete: string;
  isValid: boolean;
  alertMessage?: string;
}
const InputBox: React.FC<InputBoxProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  isValid,
  alertMessage,
}) => {
  return (
    <Wrapper>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        isValid={!value || isValid}
      />
      {value && !isValid && <AlertMessage>{alertMessage}</AlertMessage>}
    </Wrapper>
  );
};

export default InputBox;

InputBox.defaultProps = {
  alertMessage: '',
};
