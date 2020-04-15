'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi saya berjalan!!",res)
};


exports.tampilsemuadata = function(req,res){
    connection.query('SELECT * FROM t_service', function(error,rows,fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};