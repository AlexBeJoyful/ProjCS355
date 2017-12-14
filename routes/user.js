var express = require('express');
var router = express.Router();
var user_dal = require('../model/user_dal');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all', function(req, res) {
  user_dal.getAll(function(err1, res1) {
    if(err1) {

      res.send(err1);
    }
    else {

      res.render('user/userViewAll', {response: res1});
    }
  });
});

router.get('/viewBy/:id', function(req, res){
  var id = req.params.id;

  user_dal.getAllById(id, function(err2, user) {
      if (err2) {
          console.log("error");
          res.send(err2);
      }
      console.log(user);
      var obj = {
          user: user,
          user_id: id};

      console.log(obj);

      res.render('user/userViewById', {object: obj});

    })
})



module.exports = router;
