const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const Joi = require('@hapi/joi');

const config = require('../../constant');
const { userShcema } = require('../../schemas');

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: config.AWS.USER_POOL_ID,
  ClientId: config.AWS.CLIENT_ID,
});

exports.signUp = async (req, res) => {
  try {
    const validated = await Joi.validate(req.body, userShcema);
    const { username, password } = validated;

    const attributeList = [];
    const dataEmail = { Name: 'email', Value: username };
    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataEmail,
    );

    attributeList.push(attributeEmail);
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        const { name, message } = err;
        res.status(400).json({ error: { name, message } });
        return;
      }
      const cognitoUser = result.user;
      console.log(`username is ${cognitoUser.getUsername()}`);
      res.status(200).json('success!!!');
    });
  } catch (e) {
    const { name, message } = e;
    res.status(400).json({ error: { name, message } });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData,
    );

    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        const accessToken = result.getAccessToken().getJwtToken();
        // Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer
        const idToken = result.idToken.jwtToken;
        res.status(200).json({ accessToken, idToken });
      },
      onFailure: err => {
        const { name, message } = err;
        res.status(403).json({ error: { name, message } });
      },
    });
  } catch (e) {
    const { name, message } = e;
    res.status(403).json({ error: { name, message } });
  }
};

exports.logOut = async req => {
  const { username } = req.body;
  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.globalSignOut();
};
