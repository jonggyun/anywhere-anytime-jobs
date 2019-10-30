import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LogInPage from 'pages/LogInPage';
import SignUpPage from 'pages/SignUpPage';
import JobDetailPage from 'pages/JobDetailPage';

const App: React.FC = () => {
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
