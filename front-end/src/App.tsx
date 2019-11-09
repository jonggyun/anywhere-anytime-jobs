import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LogInPage from 'pages/LogInPage';
import SignUpPage from 'pages/SignUpPage';
import JobDetailPage from 'pages/JobDetailPage';

import { meRequest } from 'store/auth/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = sessionStorage.getItem(
      'anywhere-anytime-jobs:accessToken',
    );
    const idToken = sessionStorage.getItem('anywhere-anytime-jobs:idToken');

    if (accessToken && idToken) dispatch(meRequest({ accessToken, idToken }));
  });
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/job/:companyId" component={JobDetailPage} />
      <Route exact path="/login" component={LogInPage} />
      <Route exact path="/signup" component={SignUpPage} />
    </>
  );
};

export default App;
