var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIG */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM games;';

    connection.query(query, function(err, res) {
        callback(err, res);
    });
};


exports.getAllById = function(id, callback) {
    var query = "select game_name, game_desc from games where game_id = " + id + ";";
    console.log("query: " + query);
    connection.query(query, function(err, res){
        callback(err, res);
    })
};
