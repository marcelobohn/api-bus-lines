var express = require('express');
var router = express.Router();

router.post('/:enterprise', function(req, res, next) {
  const { enterprise } = req.params;
  const lines = require(`../../data/${enterprise}/lines`);
  res.json(lines);  
});

router.post('/:enterprise/:id', function (req, res) {
  const { enterprise, id } = req.params;
  const lines = require(`../../data/${enterprise}/lines`);
  const r = lines.items.find(a => a.id === id);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found line"});
});

module.exports = router;
