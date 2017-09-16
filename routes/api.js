var express = require('express');
var router = express.Router();

const lines = require('../data/lines');
const routes = require('../data/routes');

router.post('/lines', function(req, res, next) {
  res.json(lines);  
});

router.post('/routes', function(req, res, next) {
  res.json(routes);  
});

module.exports = router;
