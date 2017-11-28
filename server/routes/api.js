const express = require('express');
const router = express.Router();
const authentication = require('./authentication');
const contact = require('./contact.js');

router.use('/authentication', authentication);
router.use('/contact', contact);

module.exports = router;
