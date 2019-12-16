import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  display: block;
  margin-right: 1rem;
`;

const RadioLabel = styled.label`
  margin-right: 0.5rem;
  & > span {
    font-weight: 900;
    margin-left: 0.5rem;
  }
`;

const boxFadeIn = keyframes`
  0% {
    opacity: 0;
    height: 1rem;
  }
  100% {
    opacity: 1;
    height: 13.75rem;
  }
`;

const textArea = css`
  resize: none;
  width: 100%;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  margin-top: 0.5rem;
  border: 1px solid rgb(238, 238, 238);

  :focus {
    outline: none;
  }
`;

interface TextAreaProps {
  isDisplay?: boolean;
}
const FadeTextArea = styled.textarea<TextAreaProps>`
  ${textArea}
  height: 1rem;

  ${({ isDisplay }) =>
    isDisplay
      ? css`
          visibility: visible;
          height: 13.75rem;
          animation: ${boxFadeIn} 0.3s ease-in 1;
        `
      : css`
          visibility: hidden;
        `};
`;

interface TextAreaBoxProps {
  title: string;
  name: string;
  value: string;
  placeholder: string;
  checked: boolean;
  onChangeRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextAreaBox: React.FC<TextAreaBoxProps> = ({
  title,
  name,
  value,
  placeholder,
  checked,
  onChangeRadioButton,
  onChangeTextArea,
}) => {
  return (
    <React.Fragment>
      <TitleWrapper>
        <Title>{title}</Title>
        <RadioLabel>
          <input
            type="radio"
            name={name}
            checked={checked}
            onChange={onChangeRadioButton}
          />
          <span>YES</span>
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name={name}
            checked={!checked}
            onChange={onChangeRadioButton}
          />
          <span>NO</span>
        </RadioLabel>
      </TitleWrapper>
      <FadeTextArea
        isDisplay={checked}
        placeholder={placeholder}
        value={value}
        onChange={onChangeTextArea}
      />
    </React.Fragment>
  );
};

export default TextAreaBox;
