'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('APlikasi REST API berjalan',res)
};

//menampilkan data sparepart dan montir
exports.tampildatasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
exports.tampildatamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data sparepart dan montir berdasarkan id
exports.tampildatasparepartid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

exports.tampildatamontirid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//Menampilkan Data Service 
exports.tampilservice = function(req,res){
    
    connection.query('SELECT t_user.nama_user, t_service.tgl_service, t_montir.Nama_montir, t_sparepart.nama_sparepart,t_sparepart.harga_sparepart, t_service.jumlah_sparepart, t_service.jam_service, t_montir.harga_perjam, t_service.hargatotal_service FROM t_service JOIN t_user JOIN t_sparepart JOIN t_montir WHERE t_service.id_user = t_user.id_user AND t_service.id_sparepart = t_sparepart.id_sparepart AND t_service.id_montir = t_montir.id_montir ORDER BY t_user.id_user ',
     function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data service total
exports.tampildatamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menambahkan data montir
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;
    

    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};
//menambahkan data Sparepart
exports.tambahsparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    

    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
        [nama_sparepart, harga_sparepart,satuan], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data User
exports.tambahuser = function (req, res) {
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();
    

    connection.query('INSERT INTO t_user (nama_user, email, password, role, tanggal_daftar) VALUES(?,?,?,?,?)',
        [nama_user, email, password, role, tanggal_daftar], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;
    var role = req.body.role;
    
    

    connection.query('INSERT INTO level (nama_level, role) VALUES(?,?)',
        [nama_level, role], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data service
exports.tambahservice = function (req, res) {
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;
    

    connection.query('INSERT INTO t_service (tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service) VALUES(?,?,?,?,?,?)',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};


//Mengubah Data berdasarkan id
exports.ubahmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', [nama_montir, harga_perjam, id_montir],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//mengubah data Sparepart
exports.ubahsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    

    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',
     [nama_sparepart, harga_sparepart, satuan, id_sparepart],
    function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//Mengubah data User
exports.ubahuser = function (req, res) {
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();
    

    connection.query('UPDATE t_user SET nama_user=?, email=?, password=?, role=?, tanggal_daftar=? WHERE id_user=?',
        [nama_user, email, password, role, tanggal_daftar, id_user], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//menambahkan data level
exports.ubahlevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;
    var role = req.body.role;
    
    

    connection.query('UPDATE level SET nama_level=?, role=? WHERE id_level=?',
        [nama_level, role, id_level], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//menambahkan data service
exports.ubahservice = function (req, res) {
    var id_service = req.body.id_service;
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;
    

    connection.query('UPDATE t_service SET tgl_service=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=?, jam_service=? WHERE id_service=?',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service, id_service], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};


//Menghapus data berdasarkan id
exports.hapusMontir = function(req, res){
    var id = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusSparepart = function(req, res){
    var id = req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusUSer = function(req, res){
    var id = req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusLevel = function(req, res){
    var id = req.body.id_level;
    connection.query('DELETE FROM level WHERE id_level=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusservice = function(req, res){
    var id = req.body.id_service;
    connection.query('DELETE FROM t_service WHERE id_service=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};