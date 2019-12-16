import React from 'react';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button';
import TextAreaBox from 'components/common/TextAreaBox';

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
