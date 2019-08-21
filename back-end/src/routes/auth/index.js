const express = require('express');
const authCtrl = require('./authCtrl');

const router = express.Router();

router.post('/signup', authCtrl.signUp);
router.post('/login', authCtrl.logIn);

module.exports = router;
