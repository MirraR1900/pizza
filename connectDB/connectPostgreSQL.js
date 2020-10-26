const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test1',
    password: '123456',
    port: 5432,
});

module.exports.poolPostgreSQL = pool;

module.exports.connectPostgreSQL = async function () {
    try{
        await pool.connect();
        console.log("Server listen...");    
        //await pool.end();    
        // const res = await pool.query('SELECT * FROM workers');
        // console.log(res.rows);
    } catch (e) {
        console.log(e);
    }
}

// const res = await pool.query('SELECT * FROM cafe');
// console.log(res.rows);
// const res2 = await pool.query('SELECT * FROM users WHERE id=1');
// console.log(res2.rows);
// const res3 = await pool.query('SELECT * FROM users WHERE id=2');
// console.log(res3.rows);
// await pool.end();