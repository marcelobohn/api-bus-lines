var express = require('express');
var router = express.Router();

const modelRoutes = require('../../models/routes');

router.post('/:enterprise', function(req, res, next) {
  const { enterprise } = req.params;
  const { filterDepartureCity } = req.body;
  let routes = modelRoutes.read().get(enterprise).value();  
  if (filterDepartureCity)
    routes.items = routes.items.filter((l) => l.departure.city === filterDepartureCity);  
  res.json(routes);  
});

router.post('/:enterprise/:resume', function (req, res) {
  const { enterprise, resume } = req.params;
  const routes = modelRoutes.read().get(enterprise).get('items').value().find(a => a.resume === resume);
  if (routes)
    res.json(routes);
  else
    res.status(404).json({"error": "Not found route"});
});

module.exports = router;
