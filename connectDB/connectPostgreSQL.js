const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test1',
    password: '123456',
    port: 5432,
});

module.exports.connectPostgreSQL = async function () {
    try{
        await pool.connect();
        console.log("Server listen...");    
        //await pool.end();    
    } catch (e) {
        console.log(e);
    }
}

module.exports.getUsers = async function(){
    const res = await pool.query('SELECT * FROM workers');
    console.log(res.rows);
}

// const res = await pool.query('SELECT * FROM users');
// console.log(res.rows);
// const res2 = await pool.query('SELECT * FROM users WHERE id=1');
// console.log(res2.rows);
// const res3 = await pool.query('SELECT * FROM users WHERE id=2');
// console.log(res3.rows);
// await pool.end();