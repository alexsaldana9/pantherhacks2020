var express = require('express');
var router = express.Router();

/* GET thankyou page. */
router.get('/', function(req, res, next) {
  res.render('thankyou', { title: 'Form Submitted  - Thank you' });
});

module.exports = router;