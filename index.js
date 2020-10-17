const express = require("express");
const connection = require("./connectDB/connectPostgreSQL");
const connectDb = require("./connectDB/connectMongoDB");
const prodRouters = require("./routes/products");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.use(express.urlencoded({extended: true}));

app.use(prodRouters);

connectDb.connectMongoDB(app);
// connection.connectPostgreSQL();