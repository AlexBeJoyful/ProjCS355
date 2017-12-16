var express = require('express');
var router = express.Router();
var style_dal = require('../model/style_dal');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/all', function(req, res) {
    style_dal.getAll(function(err1, res1) {
        if(err1) {

            res.send(err1);
        }
        else {

            res.render('style/styleViewAll', {response: res1});
        }
    });
});

router.get('/viewBy/:id', function(req, res){
    var id = req.params.id;

    style_dal.getAllById(id, function(err2, style) {
        if (err2) {
            console.log("error");
            res.send(err2);
        }
        console.log(style);
        var obj = {
            style: style,
            style_id: id};

        console.log(obj);

        res.render('style/styleViewById', {object: obj});

    })
})



module.exports = router;