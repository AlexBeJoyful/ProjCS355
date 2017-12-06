var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project 2' });
});

// about pg
router.get('/about', function(req, res) {
    res.render('about', { title: 'About Page'});
});


module.exports = router;
