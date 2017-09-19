var express = require('express');
var router = express.Router();

router.post('/:enterprise/', function(req, res, next) {
  const { enterprise } = req.params;
  const routes = require(`../../data/${enterprise}/routes`);
  res.json(routes);  
});

router.post('/:enterprise/:resume', function (req, res) {
  const { enterprise, resume } = req.params;
  const routes = require(`../../data/${enterprise}/routes`);
  const r = routes.items.find(a => a.resume === resume);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found route"});
});

module.exports = router;
