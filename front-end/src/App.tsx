import React from 'react';
import { Route } from 'react-router-dom';

import Main from 'pages/Main';

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
    </>
  );
};

export default App;
