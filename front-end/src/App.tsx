import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LogInPage from 'pages/LogInPage';
import SignUpPage from 'pages/SignUpPage';
import JobDetailPage from 'pages/JobDetailPage';
import CreateJobPage from 'pages/CreateJobPage';

import { meRequest } from 'store/auth/actions';
import { Auth } from 'aws-amplify';

const App: React.FC = () => {
  const dispatch = useDispatch();
  // const { push } = useHistory();

  const checkUserSession = async () => {
    try {
      await Auth.currentSession();
      const {
        attributes: { email },
      } = await Auth.currentAuthenticatedUser({ bypassCache: false });
      dispatch(meRequest({ email }));
      // push('/');
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/job/:companyId" component={JobDetailPage} />
      <Route exact path="/login" component={LogInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/create" component={CreateJobPage} />
    </>
  );
};

export default App;
