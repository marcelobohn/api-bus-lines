var express = require('express');
var router = express.Router();

const routes = require('../data/routes');

router.post('/', function(req, res, next) {
  res.json(routes);  
});

module.exports = router;
