const express = require("express");
const mongoose = require("mongoose");
const { Client } = require('pg');
const prodRouters = require("./routes/products");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.use(express.urlencoded({extended: true}));

app.use(prodRouters);

async function startMongoDB() {
    try{
        await  mongoose.connect("mongodb://localhost:27017/products", {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }) 
        app.listen(PORT, () => {
            console.log("Server start...");
        });
    } catch (e) {
        console.log(e);
    }
}

async function startPostgreSQL() {
    try{
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'test1',
            password: '123456',
            port: 5432,
        });
        await client.connect();
        console.log("Server listen...");
        const res = await client.query('SELECT * FROM users');
        console.log(res.rows);
        await client.end();
        
    } catch (e) {
        console.log(e);
    }
}

startMongoDB();
startPostgreSQL();