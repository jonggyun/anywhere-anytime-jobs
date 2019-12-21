import React from 'react';
import styled, { css } from 'styled-components';

import InputBox from 'components/common/InputBox';
import Button from 'components/common/Button';
import TextAreaBox from 'components/common/TextAreaBox';

const Wrapper = styled.section`
  width: 50%;
`;

const Item = styled.div`
  padding: 0.5rem 0;
`;

interface TitleProps {
  isRequired?: boolean;
}
const Title = styled.span<TitleProps>`
  font-size: 1.5rem;
  font-weight: 900;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  ${({ isRequired }) =>
    isRequired &&
    css`
      ::before {
        content: '*';
        font-size: 1.25rem;
        margin-right: 0.5rem;
        color: red;
      }
    `};
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface UpdateJobProps {
  company: string;
  onChangeCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
  location: string;
  onChangeLocation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  homepage: string;
  onChangeHomepage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isWherePermission: boolean;
  anywhereRule: string;
  isTimePermission: boolean;
  anytimeRule: string;
  onChangeRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAnytimeRule: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAnywhereRule: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitJob: () => void;
}
const UpdateJob: React.FC<UpdateJobProps> = ({
  company,
  onChangeCompany,
  location,
  onChangeLocation,
  homepage,
  onChangeHomepage,
  description,
  onChangeDescription,
  isWherePermission,
  anywhereRule,
  isTimePermission,
  anytimeRule,
  onChangeRadioButton,
  onChangeAnytimeRule,
  onChangeAnywhereRule,
  onSubmitJob,
}) => {
  return (
    <Wrapper>
      <Item>
        <Title isRequired>변경되는 회사명이 무엇인가요?</Title>
        <InputBox
          type="text"
          name="company"
          value={company}
          onChange={onChangeCompany}
          placeholder="변경되는 회사명을 입력하세요."
          autoComplete="off"
          alertMessage="회사명을 입력해주세요."
          isValid={true}
        />
      </Item>
      <Item>
        <Title isRequired>변경되는 홈페이지는 무엇인가요?</Title>
        <InputBox
          type="text"
          name="homepage"
          value={homepage}
          onChange={onChangeHomepage}
          placeholder="변경되는 홈페이지를 입력하세요."
          autoComplete="off"
          alertMessage="홈페이지를 입력해주세요."
          isValid={true}
        />
      </Item>
      <Item>
        <Title isRequired>이사가는 위치는 어디인가요?</Title>
        <InputBox
          type="text"
          name="location"
          value={location}
          onChange={onChangeLocation}
          placeholder="주소를 입력하세요."
          autoComplete="off"
          isValid={true}
        />
      </Item>
      <Item>
        <Title>회사 정보를 수정해주세요!</Title>
        <TextArea
          placeholder="어떤 회사인가요?!"
          value={description}
          onChange={onChangeDescription}
        />
      </Item>
      <Item>
        <TextAreaBox
          title="원격 근무를 지원하나요?"
          name="iswhere"
          value={anywhereRule}
          placeholder="어떤 규칙을 갖고 있나요?"
          checked={isWherePermission}
          onChangeRadioButton={onChangeRadioButton}
          onChangeTextArea={onChangeAnywhereRule}
        />
      </Item>
      <Item>
        <TextAreaBox
          title="자율 출퇴근을 지원하나요?"
          name="istime"
          value={anytimeRule}
          placeholder="어떤 규칙을 갖고 있나요?"
          checked={isTimePermission}
          onChangeRadioButton={onChangeRadioButton}
          onChangeTextArea={onChangeAnytimeRule}
        />
      </Item>
      <ButtonWrapper>
        <Button onClick={() => true} disabled={false} widthSize="6.25rem">
          취소
        </Button>
        <Button
          disabled={!company || !homepage || !location}
          widthSize="6.25rem"
          onClick={onSubmitJob}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default UpdateJob;
