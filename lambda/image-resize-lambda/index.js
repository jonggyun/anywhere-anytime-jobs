const AWS = require('aws-sdk');
const sharp = require('sharp');
const s3 = new AWS.S3();

exports.handler = async event => {
  try {
    const originalImage = await s3
      .getObject({
        Bucket: 'anywhere-anytime-jobs-bucket/companies',
        Key: 'testdata.png',
      })
      .promise();

    const resizedImage = await sharp(originalImage.Body)
      .resize(102, 102)
      .toBuffer();

    await s3
      .putObject({
        Bucket: 'anywhere-anytime-jobs-bucket/thumbnail',
        Body: resizedImage,
        Key: 'testdata_thumbnail.png',
      })
      .promise();
    return {
      status: 200,
      data: 'success',
    };
  } catch (error) {
    return {
      status: 500,
      error,
    };
  }
};
