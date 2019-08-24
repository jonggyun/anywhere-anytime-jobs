const express = require('express');
const {
  getAllCompanies,
  addCompany,
  getCompany,
  modifyCompany,
  removeCompany,
} = require('./companyCtrl');

const router = express.Router();

router.get('/', getAllCompanies);
router.post('/', addCompany);
router.get('/:company', getCompany);
router.put('/:company', modifyCompany);
router.delete('/:company', removeCompany);

module.exports = router;
