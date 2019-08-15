const express = require('express');
const authCtrl = require('./authCtrl');

const router = express.Router();

router.post('/signup', authCtrl.signUp);

module.exports = router;
