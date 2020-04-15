'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi saya berjalan!!",res)
};


exports.tampilsemuadata = function(req,res){
    connection.query('SELECT * FROM t_service', function(error,rows,fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};


exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_service WHERE id_service = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows,res);
            }
        });
    };


    exports.tambahdatamontir = function(req,res){
        var nama_montir = req.body.nama_montir;
        var harga_perjam = req.body.harga_perjam;

        connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES (?,?)',
        [nama_montir,harga_perjam],
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Menambahkan Data!",res)
            }
        });
    };


    exports.ubahdatamontir = function(req, res){
        var id = req.body.id_montir;
        var nama_montir = req.body.nama_montir;
        var harga_perjam = req.body.harga_perjam;

        connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', [nama_montir, harga_perjam, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data", res)
            }
        });
    }