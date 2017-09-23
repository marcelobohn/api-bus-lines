var express = require('express');
var router = express.Router();

const routes = require('../../models/routes');

router.post('/:enterprise', function(req, res, next) {
  const { enterprise } = req.params;
  const { filterDepartureCity } = req.body;
  let r = routes.read().get(enterprise).value();  
  if (filterDepartureCity)
    r.items = r.items.filter((l) => l.departure.city === filterDepartureCity);  
  res.json(r);  
});

router.post('/:enterprise/:resume', function (req, res) {
  const { enterprise, resume } = req.params;
  const r = routes.read().get(enterprise).get('items').value().find(a => a.resume === resume);
  if (r)
    res.json(r);
  else
    res.status(404).json({"error": "Not found route"});
});

module.exports = router;
