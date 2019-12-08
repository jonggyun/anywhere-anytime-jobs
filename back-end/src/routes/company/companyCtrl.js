const AWS = require('aws-sdk');
const Joi = require('@hapi/joi');
const axios = require('axios');

const config = require('../../constant');
const { companySchema } = require('../../schemas');

AWS.config.update({
  region: config.AWS.REGION,
  endpoint: config.AWS.DYNAMODB.ENDPOINT,
  accessKeyId: config.AWS.ACCESS_KEY_ID,
  secretAccessKey: config.AWS.SECRET_ACCESS_KEY,
});

const params = {
  TableName: config.AWS.DYNAMODB.COMPNAY_TABLE,
};

const docClient = new AWS.DynamoDB.DocumentClient();

exports.getAllCompanies = async (req, res) => {
  try {
    const { Items: items, Count: count } = await docClient
      .scan(params)
      .promise();
    res.status(200).json({
      jobs: items,
      count,
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

exports.addCompanyLogo = async (req, res) => {
  try {
    if (!req.file) throw new Error('file extension is not valid');
    res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      error: error.toString(),
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

    const { Items: items } = await docClient
      .query({
        ...params,
        ...condition,
      })
      .promise();

    res.status(200).json({
      item: items[0],
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

exports.getCompanyNews = async (req, res) => {
  try {
    const { companyName } = req.params;

    const {
      data: { items },
    } = await axios.get(
      `${config.NAVER.API_URL}${encodeURI(companyName)}&display=5`,
      {
        headers: {
          'X-Naver-Client-Id': config.NAVER.CLIENT_ID,
          'X-Naver-Client-Secret': config.NAVER.CLIENT_SECRET,
        },
      },
    );

    res.status(200).json({
      news: items,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
