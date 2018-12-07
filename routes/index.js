var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Savings with ExpressJS' });
  res.json({
    welcome: "Savings API with ExpressJS"
  })
});

module.exports = router;
