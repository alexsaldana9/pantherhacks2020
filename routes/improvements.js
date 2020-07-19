var express = require('express');
var router = express.Router();

/* GET Improvements page. */
router.get('/', function(req, res, next) {
  res.render('improvements', { title: 'Help the Elderly - Improvements' });
});

module.exports = router;
