var express = require('express');
var router = express.Router();
var game_dal = require('../model/game_dal');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/all', function(req, res) {
    game_dal.getAll(function(err1, res1) {
        if(err1) {

            res.send(err1);
        }
        else {

            res.render('games/gameViewAll', {response: res1});
        }
    });
});

router.get('/viewBy/:id', function(req, res){
    var id = req.params.id;

    game_dal.getAllById(id, function(err2, games) {
        if (err2) {
            console.log("error");
            res.send(err2);
        }
        console.log(games);
        var obj = {
            games: games,
            game_id: id};

        console.log(obj);

        res.render('games/gameViewById', {object: obj});

    })
})



module.exports = router;