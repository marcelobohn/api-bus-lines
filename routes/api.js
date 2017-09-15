var express = require('express');
var router = express.Router();

const lines = require('../data/lines');

router.post('/lines', function(req, res, next) {
  res.json(lines);  
});

module.exports = router;
