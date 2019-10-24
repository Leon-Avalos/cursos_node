const sqlite3 = require('sqlite3').verbose()
const path = require('path')
let dbpath = path.resolve(__dirname, 'cursos.db')
console.log(dbpath)
let db = new sqlite3.Database(dbpath)
let sql = `SELECT DISTINCT nombre FROM  student`;

db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }

    rows.forEach((row) => {
        console.log(row.name);
    });
})


db.close((err) => {
    if(err){
        console.log(err.message);
    }
    console.log("close connection")
})