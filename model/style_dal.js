var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIG */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM style;';

    connection.query(query, function(err, res) {
        callback(err, res);
    });
};


exports.getAllById = function(id, callback) {
    var query = "select game_mode, game_type, console from style where style_id = " + id + ";";
    console.log("query: " + query);
    connection.query(query, function(err, res){
        callback(err, res);
    })
};
