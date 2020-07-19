var express = require('express');
var router = express.Router();

/* GET Improvements page. */
router.get('/', function(req, res, next) {
  res.render('improvements', { title: 'Improvements' });
});

module.exports = router;
