var express = require('express');
var router = express.Router();

/* GET steps page. */
router.get('/', function(req, res, next) {
  res.render('steps', { title: 'Empoyee Training' });
});

module.exports = router;
