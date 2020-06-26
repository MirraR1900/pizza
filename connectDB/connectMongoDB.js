const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

module.exports.connectMongoDB = async function(app) {
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