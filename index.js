const express = require("express");
const mongoose = require("mongoose");
const mysql = require("mysql2");
const prodRouters = require("./routes/products");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.use(express.urlencoded({extended: true}));

app.use(prodRouters)


async function start() {
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

async function startDBMySQL() {
    try{
        await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "usersdb",
            password: "..."
        })
        app.listen(PORT, () => {
            console.log("DB MySQl start...");
        });
    } catch (e) {
        console.log(e);
    }
}

start();
startDBMySQL();