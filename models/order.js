const {Schema, model} = require("mongoose");
const order = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    porch: {
        type: String
    },
    pay: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    summa: {
        type: String,
        required: true
    },
    arrayOrder: {
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
},
{collection : 'orders'}
)

module.exports = model('Order', order);
