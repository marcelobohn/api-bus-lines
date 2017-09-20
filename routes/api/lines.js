var express = require('express');
var router = express.Router();
var decache = require('decache');

router.post('/:enterprise', function(req, res, next) {
  const { enterprise, route } = req.params;
  const { filterRoute } = req.body;
  decache(`../../data/lines`);
  let lines = require(`../../data/lines`);
  lines = lines[enterprise];
  if (filterRoute)
    lines.items = lines.items.filter((l) => l.route === filterRoute);
  res.json(lines);
});

router.post('/:enterprise/:id', function (req, res) {
  const { enterprise, id } = req.params;
  decache(`../../data/lines`);
  let lines = require(`../../data/lines`);
  lines = lines[enterprise];
  const r = lines.items.find(a => a.id === id);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found line"});
});

module.exports = router;
