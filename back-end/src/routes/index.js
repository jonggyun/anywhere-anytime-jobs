global.fetch = require('node-fetch');
const express = require('express');
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const constant = require('../constant');

const router = express.Router();

// Amazon Cognito 인증 공급자를 초기화합니다
AWS.config.region = constant.AWS.region; // 리전
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: constant.AWS.identityPoolId,
});

router.get('/', () => {
  const poolData = {
    UserPoolId: constant.AWS.UserPoolId,
    ClientId: constant.AWS.ClientId,
  };

  // const dataEmail = {
  //   Name: 'email',
  //   Value: 'email@mydomain.com',
  // };
  // const dataPhoneNumber = {
  //   Name: 'phone_number',
  //   Value: '+15555555555',
  // };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  const attributeList = [];
  const dataName = {
    Name: 'name',
    Value: 'Hong Gil-Dong',
  };
  const dataNickname = {
    Name: 'nickname',
    Value: 'nick!!',
  };

  const dataProfile = {
    Name: 'profile',
    Value: 'profilesssss',
  };

  const dataEmail = {
    Name: 'email',
    Value: 'jonggyuni@gmail.com',
  };

  const dataBirthdate = {
    Name: 'birthdate',
    Value: '1987-03-20',
  };
  const attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataName,
  );
  const attributeNickname = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataNickname,
  );
  const attributeProfile = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataProfile,
  );
  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail,
  );
  const attributeBirthdate = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataBirthdate,
  );

  attributeList.push(attributeName);
  attributeList.push(attributeNickname);
  attributeList.push(attributeProfile);
  attributeList.push(attributeEmail);
  attributeList.push(attributeBirthdate);
  userPool.signUp(
    'username111',
    'qkrwhdrbs1!A',
    attributeList,
    null,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const cognitoUser = result.user;
      console.log(`user name is ${cognitoUser.getUsername()}`);
    },
  );
});

module.exports = router;
