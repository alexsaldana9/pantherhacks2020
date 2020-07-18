var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instructions', { title: 'Instructions for Employees' });
});

module.exports = router;
