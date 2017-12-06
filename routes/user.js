var express = require('express');
var router = express.Router();
var user_dal = require('../model/user_dal');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all', function(req, res) {
  user_dal.getAll(function(err, result) {
    if(err) {

      res.send(err);
    }
    else {

      res.render('user/userViewAll', {'result': result});
    }
  });
});


module.exports = router;
