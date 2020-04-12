const {Schema, model} = require("mongoose");
const schema = new Schema({
    _id: {
        type: String,
        required: true
    },
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
{ collection : 'pizza' }
)

module.exports = model('Prod', schema);