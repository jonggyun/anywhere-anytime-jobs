import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LogInPage from 'pages/LogInPage';
import SignUpPage from 'pages/SignUpPage';

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LogInPage} />
      <Route exact path="/signup" component={SignUpPage} />
    </>
  );
};

export default App;
