const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const config = require('../../constant');
const {
  getAllCompanies,
  addCompany,
  addCompanyLogo,
  getCompany,
  modifyCompany,
  removeCompany,
  getCompanyNews,
} = require('./companyCtrl');

const router = express.Router();

const fileFilter = (req, file, cb) => {
  if (/image\/+/g.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

AWS.config.update({
  region: config.AWS.REGION,
  endpoint: config.AWS.S3.ENDPOINT,
  accessKeyId: config.AWS.ACCESS_KEY_ID,
  secretAccessKey: config.AWS.SECRET_ACCESS_KEY,
});

const storage = multerS3({
  s3: new AWS.S3({ apiVersion: '2006-03-01' }),
  bucket: `${config.AWS.S3.BUCKET}/companies`,
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter,
});

router.get('/', getAllCompanies);
router.post('/', addCompany);
router.post('/:companyId/upload', upload.single('logo'), addCompanyLogo);
router.get('/:companyId', getCompany);
router.put('/:companyId', modifyCompany);
router.delete('/:companyId', removeCompany);
router.get('/news/:companyName', getCompanyNews);

module.exports = router;
