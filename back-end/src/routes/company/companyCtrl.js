const AWS = require('aws-sdk');
const Joi = require('@hapi/joi');
const uuidv1 = require('uuid/v1');

const config = require('../../constant');
const { companySchema } = require('../../schemas');

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
    const { Items: items, Count: count } = await docClient
      .scan(params)
      .promise();

    res.status(200).json({
      message: 'success',
      data: { items, count },
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.addCompany = async (req, res) => {
  try {
    const validated = await Joi.validate(req.body, companySchema);
    await docClient
      .put({
        ...params,
        Item: {
          companyId: uuidv1(),
          ...validated,
        },
      })
      .promise();
    res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      error,
    });
  }
};

exports.getCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const condition = {
      KeyConditionExpression: '#cp = :companyId',
      ExpressionAttributeNames: {
        '#cp': 'companyId',
      },
      ExpressionAttributeValues: {
        ':companyId': companyId,
      },
      Limit: 1,
    };

    const { Items: items, Count: count } = await docClient
      .query({
        ...params,
        ...condition,
      })
      .promise();

    res.status(200).json({
      message: 'success',
      data: { items, count },
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.modifyCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const validated = await Joi.validate(req.body, companySchema);
    await docClient
      .put({
        ...params,
        Item: {
          ...validated,
          companyId,
        },
      })
      .promise();
    res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.removeCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { company } = req.body;

    await docClient
      .delete({
        ...params,
        Key: {
          companyId,
          company,
        },
      })
      .promise();
    res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
