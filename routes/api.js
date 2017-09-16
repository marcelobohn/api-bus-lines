var express = require('express');
var router = express.Router();

const lines = require('./api/lines');
const routes = require('./api/routes');

router.use('/lines', lines);
router.use('/routes', routes);

module.exports = router;
