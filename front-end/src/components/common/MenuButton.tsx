import React from 'react';
import styled, { css } from 'styled-components';
import palette from 'styles/palette';

const defaultTheme = css`
  border: 1px solid ${palette.gray3};
  color: ${palette.blue9};
  :link,
  :active,
  :visited {
    color: ${palette.blue9};
  }
  :hover {
    cursor: pointer;
    background-color: ${palette.blue9};
    color: #fff;
    border: 1px solid ${palette.blue9};
  }
`;

const blue = css`
  background-color: ${palette.blue9};
  border: 1px solid ${palette.blue9};
  color: #fff;
  :link,
  :active,
  :visited {
    color: #fff;
  }
  :hover {
    cursor: pointer;
    background-color: ${palette.blue6};
    color: #fff;
    border: 1px solid ${palette.blue6};
  }
`;

const ButtonWrapper = styled.div`
  font-weight: 900;
`;

interface ButtonProps {
  theme: string;
}
const Button = styled.span<ButtonProps>`
  padding: 0.5rem 1.75rem;
  box-sizing: content-box;
  border-radius: 1.25rem;
  font-size: 0.75rem;
  ${({ theme }) => (theme === 'blue' ? blue : defaultTheme)};
`;

interface MenuButtonProps {
  onClick?: () => void;
  theme?: string;
}
const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  onClick,
  theme,
}) => {
  return (
    <ButtonWrapper>
      <Button theme={theme || 'defaultTheme'} onClick={onClick}>
        {children}
      </Button>
    </ButtonWrapper>
  );
};

export default MenuButton;
