const path = require('path');
const express = require('express');

const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.getIndex);

router.get('/search', controller.getResults);

module.exports = router;