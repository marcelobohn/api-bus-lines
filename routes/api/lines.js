var express = require('express');
var router = express.Router();
var decache = require('decache');

const lines = require('../../models/lines');

router.post('/:enterprise', function(req, res, next) {
  const { enterprise, route } = req.params;
  const { filterRoute } = req.body;
  let r = lines.read().get(enterprise).value();
  if (filterRoute)
    r.items = r.items.filter((l) => l.route === filterRoute);
  res.json(r);
});

router.post('/:enterprise/:id', function (req, res) {
  const { enterprise, id } = req.params;
  const r = lines.read().get(enterprise).get('items').value().find(a => a.id === id);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found line"});
});

module.exports = router;
