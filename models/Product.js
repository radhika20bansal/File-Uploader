const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Products', ProductSchema);