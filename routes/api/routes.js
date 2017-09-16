var express = require('express');
var router = express.Router();

const routes = require('../../data/routes');

router.post('/', function(req, res, next) {
  res.json(routes);  
});

router.post('/:resume', function (req, res) {
  const { resume } = req.params;
  const r = routes.items.find(a => a.resume === resume);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found route"});
});

module.exports = router;
