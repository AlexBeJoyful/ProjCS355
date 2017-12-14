var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIG */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM user;';

    connection.query(query, function(err, res) {
        callback(err, res);
    });
};


exports.getAllById = function(id, callback) {
    var query = "select first_name, last_name, email from user where user_id = " + id + ";";
    console.log("query: " + query);
    connection.query(query, function(err, res){
        callback(err, res);
    })
};
