const {Schema, model} = require("mongoose");
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
},
{ collection : 'cakes' }
)

module.exports = model('Cakes', schema);