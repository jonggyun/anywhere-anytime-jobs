import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
    </>
  );
};

export default App;
