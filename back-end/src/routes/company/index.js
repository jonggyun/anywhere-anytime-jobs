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
router.get('/:companyId', getCompany);
router.put('/:companyId', modifyCompany);
router.delete('/:companyId', removeCompany);

module.exports = router;
