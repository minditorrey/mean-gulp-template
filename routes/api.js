'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/home.html, require('./home'));


module.exports = router;