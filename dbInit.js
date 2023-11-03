const mysql = require('mysql2');
const fs = require('fs')
require('dotenv').config()

const schema = fs.readFileSync('./db/schema.sql', { encoding: 'utf-8' });

const db = mysql.createPool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
        multipleStatements: true 
    },
);

db.query(schema, (err, results) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Database created!')
    }
    db.end();
});