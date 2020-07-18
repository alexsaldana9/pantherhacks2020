var express = require('express');
var router = express.Router();

/* GET pitch page. */
router.get('/', function(req, res, next) {
  res.render('pitch', { title: 'Empoyee Training' });
});

module.exports = router;
