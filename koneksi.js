var mysql = require('mysql');


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'utspemrog'
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;