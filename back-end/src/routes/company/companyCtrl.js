const AWS = require('aws-sdk');
const config = require('../../constant');

AWS.config.update({
  region: config.AWS.region,
  endpoint: config.AWS.endpoint,
});

const docClient = new AWS.DynamoDB.DocumentClient();

exports.getAllCompanies = async (req, res) => {
  try {
    const params = {
      TableName: config.AWS.TableName.company,
    };

    const data = await docClient.scan(params).promise();

    res.status(200).json({
      message: 'success',
      data,
    });
  } catch (e) {
    console.log('err', e);
    res.status(400).json({
      error: e,
    });
  }
};

exports.addCompany = async () => {
  console.log('add');
};

exports.getCompany = async () => {
  console.log('get');
};

exports.modifyCompany = async () => {
  console.log('modify');
};

exports.removeCompany = async () => {
  console.log('remove');
};
