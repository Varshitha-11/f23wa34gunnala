var express = require('express');
var router = express.Router();

var sum = 0;
var more = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more =more+1;
  sum =sum+more;
  res.send('sum is: '+sum);
});

module.exports = router;
