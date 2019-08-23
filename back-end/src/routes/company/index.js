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
router.post('/:companyId', addCompany);
router.get('/:conpanyId', getCompany);
router.put('/:conpanyId', modifyCompany);
router.delete('/:conpanyId', removeCompany);

module.exports = router;
