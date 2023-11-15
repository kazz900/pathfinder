const path = require('path');
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/maincontroller');

router.get('/', mainController.getMain);

module.exports = router;