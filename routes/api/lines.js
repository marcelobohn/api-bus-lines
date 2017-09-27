var express = require('express');
var router = express.Router();
var decache = require('decache');

const modelLines = require('../../models/lines');

router.post('/:enterprise', function(req, res, next) {
  const { enterprise, route } = req.params;
  const { filterRoute } = req.body;
  let lines = modelLines.read().get(enterprise).value();
  if (filterRoute)
    lines.items = lines.items.filter((l) => l.route === filterRoute);
  res.json(lines);
});

router.post('/:enterprise/:id', function (req, res) {
  const { enterprise, id } = req.params;
  const lines = modelLines.read().get(enterprise).get('items').value().find(a => a.id === id);
  if (lines)
    res.json(lines);
  else
    res.status(404).json({"error": "Not found line"});
});

module.exports = router;
