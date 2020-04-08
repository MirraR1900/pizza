const express = require("express");
const mongoose = require("mongoose");
const prodRouters = require("./routes/products")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.use(express.urlencoded({extended: true}));

app.use(prodRouters)

// 'mongodb+srv://Maria:DVBP67tw@cluster0-yba4o.mongodb.net/products'
async function start() {
    try{
        await  mongoose.connect("mongodb://localhost:27017/products", {
            useNewUrlParser: true,
            useFindAndModify: false
        }) 
        app.listen(PORT, () => {
            console.log("Server start...");
        });
    } catch (e) {
        console.log(e);
    }
}

start();