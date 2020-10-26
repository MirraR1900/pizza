const pool = require("../connectDB/connectPostgreSQL");

module.exports.getDataCafe = async function(){
    const res = await pool.poolPostgreSQL.query('SELECT * FROM cafe');
}

module.exports.getIdCafe = async function(){
     const idCafe = await pool.poolPostgreSQL.query('SELECT * FROM cafe WHERE cafeid =' + 2);
     let IDcafe = idCafe.rows[0].cafeid;
     console.log("cafe: " + IDcafe);
     return IDcafe;
}
