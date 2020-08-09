const pool = require("../connectDB/connectPostgreSQL");

module.exports.getDataCafe = async function(){
    const res = await pool.poolPostgreSQL.query('SELECT * FROM cafe');
    console.log(res.rows);
}

module.exports.getIdCafe = async function(){
     let value = 1;
     const idCage = await pool.poolPostgreSQL.query('SELECT * FROM cafe WHERE cafeid =' + value);
     let obj = idCage;
     return obj;
}