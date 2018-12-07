const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    page: "users route"});
});

// POST /users/signup gets JSON bodies
router.post('/signup', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
  res.json({
    "user": req.body
  })
})

module.exports = router;
