const express = require('express');
const router = express.Router();
const authentication = require('./authentication');

router.use('/authentication', authentication);

module.exports = router;
