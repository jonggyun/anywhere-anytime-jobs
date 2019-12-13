import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import Amplify from 'aws-amplify';
import config from './config';

import reducers, { rootSaga, history } from './store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.AWS.REGION,
    userPoolId: config.AWS.COGNITO.USER_POOL_ID,
    identityPoolId: config.AWS.COGNITO.IDENTITY_POOL_ID,
    userPoolWebClientId: config.AWS.COGNITO.CLIENT_ID,
  },
});

const bindMiddleware = (middleware: Array<any>) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, bindMiddleware([sagaMiddleware, logger]));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
