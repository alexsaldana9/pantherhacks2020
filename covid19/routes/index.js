var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PantherHacks 2020 - Solutions for Covid19' });
});

module.exports = router;
