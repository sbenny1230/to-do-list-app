// Module dependencies
const express = require('express');

const router = express.Router(); // Express Router object
const indexController = require('../controllers/index.controller'); // Index controller

// GET home page
router.get('/', indexController.showHome);

module.exports = router;