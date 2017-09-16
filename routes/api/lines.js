var express = require('express');
var router = express.Router();

const lines = require('../../data/lines');

router.post('/', function(req, res, next) {
  res.json(lines);  
});

router.post('/:id', function (req, res) {
  const { id } = req.params;
  const r = lines.items.find(a => a.id === id);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found line"});
});

module.exports = router;
