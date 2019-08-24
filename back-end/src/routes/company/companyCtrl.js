const AWS = require('aws-sdk');
const config = require('../../constant');

AWS.config.update({
  region: config.AWS.region,
  endpoint: config.AWS.endpoint,
});

const params = {
  TableName: config.AWS.TableName.company,
};

const docClient = new AWS.DynamoDB.DocumentClient();

exports.getAllCompanies = async (req, res) => {
  try {
    const data = await docClient.scan(params).promise();

    res.status(200).json({
      message: 'success',
      data,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.addCompany = async () => {
  console.log('add');
};

exports.getCompany = async (req, res) => {
  try {
    const { company } = req.params;
    console.log('req param', company);
    const condition = {
      KeyConditionExpression: '#cp = :company',
      ExpressionAttributeNames: {
        '#cp': 'company',
      },
      ExpressionAttributeValues: {
        ':company': company,
      },
    };

    const data = await docClient
      .query({
        ...params,
        ...condition,
      })
      .promise();

    res.status(200).json({
      message: 'success',
      data,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.modifyCompany = async () => {
  console.log('modify');
};

exports.removeCompany = async () => {
  console.log('remove');
};
