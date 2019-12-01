import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Button from 'components/common/Button';

const Wrapper = styled.section`
  width: 50%;
`;

const Item = styled.div`
  padding: 0.5rem 0;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  display: block;
  margin-right: 1rem;
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

const TextArea = styled.textarea`
  ${textArea}
  height: 13.75rem;
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const RadioLabel = styled.label`
  margin-right: 0.5rem;
  & > span {
    font-weight: 900;
    margin-left: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface CreateStep2Props {
  isWherePermission: boolean;
  isTimePermission: boolean;
  onChangeRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton: () => void;
  description: string;
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  anywhereRule: string;
  onChangeAnywhereRule: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  anytimeRule: string;
  onChangeAnytimeRule: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitJob: () => void;
}
const CreateStep2: React.FC<CreateStep2Props> = ({
  isWherePermission,
  isTimePermission,
  onChangeRadioButton,
  onClickButton,
  description,
  onChangeDescription,
  anywhereRule,
  onChangeAnywhereRule,
  anytimeRule,
  onChangeAnytimeRule,
  onSubmitJob,
}) => {
  return (
    <Wrapper>
      <Item>
        <Title>회사를 소개해주세요!</Title>
        <TextArea
          placeholder="어떤 회사인가요?!"
          value={description}
          onChange={onChangeDescription}
        />
      </Item>
      <Item>
        <TitleWrapper>
          <Title>원격 근무를 지원하나요?</Title>
          <RadioLabel>
            <input
              type="radio"
              name="iswhere"
              checked={isWherePermission}
              onChange={onChangeRadioButton}
            />
            <span>YES</span>
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="iswhere"
              checked={!isWherePermission}
              onChange={onChangeRadioButton}
            />
            <span>NO</span>
          </RadioLabel>
        </TitleWrapper>
        <FadeTextArea
          isDisplay={isWherePermission}
          placeholder="어떤 규칙을 갖고 있나요?"
          value={anywhereRule}
          onChange={onChangeAnywhereRule}
        />
      </Item>
      <Item>
        <TitleWrapper>
          <Title>자율 출퇴근을 지원하나요?</Title>
          <RadioLabel>
            <input
              type="radio"
              name="istime"
              checked={isTimePermission}
              onChange={onChangeRadioButton}
            />
            <span>YES</span>
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="istime"
              checked={!isTimePermission}
              onChange={onChangeRadioButton}
            />
            <span>NO</span>
          </RadioLabel>
        </TitleWrapper>
        <FadeTextArea
          isDisplay={isTimePermission}
          placeholder="어떤 규칙을 갖고 있나요?"
          value={anytimeRule}
          onChange={onChangeAnytimeRule}
        />
      </Item>
      <ButtonWrapper>
        <Button disabled={false} widthSize="6.25rem" onClick={onClickButton}>
          뒤로
        </Button>
        <Button disabled={false} widthSize="6.25rem" onClick={onSubmitJob}>
          완료
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CreateStep2;
