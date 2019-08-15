global.fetch = require('node-fetch');
const express = require('express');
const AWS = require('aws-sdk');

const authRouter = require('./auth');
const config = require('../constant');

const router = express.Router();

router.use('/auth', authRouter);

// Amazon Cognito 인증 공급자를 초기화합니다
AWS.config.region = config.AWS.region; // 리전
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: config.AWS.identityPoolId,
});

module.exports = router;
