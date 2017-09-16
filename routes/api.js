var express = require('express');
var router = express.Router();

const lines = require('./lines');
const routes = require('./routes');

router.use('/lines', lines);
router.use('/routes', routes);

module.exports = router;
