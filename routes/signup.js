var express = require('express');
var router = express.Router();
var multer = require("multer");
var memoryStorage = multer.memoryStorage;

const m = multer({
  storage: memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // no larger than 5mb
  }
});

/* GET Signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign-up' });
});

router.post('/submit', m.single("receiptphoto"), function(req,res, next){
  var Firstname = req.body.firstname;
  var Lastname = req.body.lastname;
  var phone = req.body.phone;
  var receiptphoto = req.file;
  var receiptphotoname = receiptphoto.originalname;

  console.log('First name = ' +  Firstname);
  console.log('Last name = ' +  Lastname);
  console.log('Phone = ' +  phone);
  console.log('Receipt file = ' +  receiptphotoname);
  console.log('File size = ' +  receiptphoto.size);
  console.log('***************************************');

  //res.render('signup');
  // res.end("yes");
  res.redirect('/thankyou');
});

module.exports = router;
