const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdWhen: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Product", productSchema);