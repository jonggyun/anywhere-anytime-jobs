import React from 'react';
import { useHistory } from 'react-router';
import styled, { css } from 'styled-components';
import palette from 'styles/palette';

import Button from 'components/common/Button';
import InputBox from 'components/common/InputBox';

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

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const UploadLabel = styled.label`
  padding: 0.3125rem 0.625rem;
  background-color: ${palette.blue9};
  color: #fff;
  border-radius: 0.5rem;

  :hover {
    cursor: pointer;
    background-color: ${palette.blue6};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${palette.gray4};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  & > img {
    margin-right: 1rem;
  }
`;

const Image = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`;

const RemoveIcon = styled.i`
  position: absolute;
  right: 1rem;
  :hover {
    cursor: pointer;
  }
`;

interface CreateStep1Props {
  onClickButton: () => void;
  company: string;
  onChangeCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
  location: string;
  onChangeLocation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  homepage: string;
  onChangeHomepage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLogoImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previewLogo: string;
  onRemovePreviewImage: () => void;
}
const CreateStep1: React.FC<CreateStep1Props> = ({
  onClickButton,
  company,
  onChangeCompany,
  location,
  onChangeLocation,
  homepage,
  onChangeHomepage,
  onChangeLogoImage,
  previewLogo,
  onRemovePreviewImage,
}) => {
  const { push } = useHistory();

  return (
    <Wrapper>
      <Item>
        <Title isRequired>회사명이 무엇인가요?</Title>
        <InputBox
          type="text"
          name="company"
          value={company}
          onChange={onChangeCompany}
          placeholder="회사명을 입력하세요."
          autoComplete="off"
          isValid={!!company}
          alertMessage="회사명을 입력해주세요."
        />
      </Item>
      <Item>
        <Title>로고가 있다면 등록해주세요!</Title>
        <UploadLabel htmlFor="logo_file">로고 등록</UploadLabel>
        <FileInput
          type="file"
          id="logo_file"
          onChange={onChangeLogoImage}
          accept="image/*"
        />
        {previewLogo && (
          <ImageWrapper>
            <Image src={previewLogo} alt="logo_image" />
            <span>filename.jpg</span>
            <RemoveIcon
              className="fas fa-trash"
              onClick={onRemovePreviewImage}
            />
          </ImageWrapper>
        )}
      </Item>
      <Item>
        <Title>회사위치가 어디인가요?</Title>
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
        <Title isRequired>홈페이지 주소를 적어주세요!</Title>
        <InputBox
          type="text"
          name="homepage"
          value={homepage}
          onChange={onChangeHomepage}
          placeholder="홈페이지 주소를 입력하세요."
          autoComplete="off"
          isValid={!!homepage}
        />
      </Item>
      <ButtonWrapper>
        <Button onClick={() => push('/')} disabled={false} widthSize="6.25rem">
          뒤로
        </Button>
        <Button
          disabled={!company || !homepage}
          widthSize="6.25rem"
          onClick={onClickButton}
        >
          다음
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CreateStep1;
