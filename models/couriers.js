const {Schema, model} = require("mongoose");
const couriers = new Schema({
    _id: {
        type: String,
    },
    firstname: {
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    deliveryMethod: {
        type: String,
        required: true
    },
    paymentTerminal: {
        type: String
    }

},
{ collection : "couriers" }
)

module.exports = model("Couriers", couriers)