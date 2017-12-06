var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIG */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM user;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

