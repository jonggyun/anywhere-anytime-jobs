import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from 'styles/palette';

import { logOutRequest } from 'store/auth/actions';

const Wrapper = styled.section`
  position: absolute;
  color: #000;
  font-size: 0.75rem;
  border: 1px solid #e9ecef;
  width: 60%;
  padding: 0.5rem 1rem;
  right: 0;
  background: #fff;
  margin-top: 8px;
`;

const CustomLink = styled(Link)`
  display: block;
  color: ${palette.blue8};
  text-decoration: none;
  user-select: none;
  text-align: right;
`;

const Content = styled.span`
  text-align: right;
  user-select: none;
  display: block;
  color: ${palette.blue8};
  :hover {
    cursor: pointer;
  }
`;

const CustomHr = styled.hr`
  width: 100%;
  color: #e9ecef;
  border-bottom: 0;
`;

const SubMenu = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const onClickLogOut = () => {
    dispatch(logOutRequest());
    setTimeout(() => {
      push('/login');
    }, 1000);
  };
  return (
    <Wrapper>
      <CustomLink to="/">CREATE JOB</CustomLink>
      <CustomHr />
      <Content onClick={onClickLogOut}>LOG OUT</Content>
    </Wrapper>
  );
};

export default SubMenu;
