const express = require('express');
const {
  getAllCompanies,
  addCompany,
  getCompany,
  modifyCompany,
  removeCompany,
  getCompanyNews,
} = require('./companyCtrl');

const router = express.Router();

router.get('/', getAllCompanies);
router.post('/', addCompany);
router.get('/:companyId', getCompany);
router.put('/:companyId', modifyCompany);
router.delete('/:companyId', removeCompany);
router.get('/news/:companyName', getCompanyNews);

module.exports = router;
