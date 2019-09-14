const mongoose = require("mongoose");
const product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const prods = await product.find();
        return res.json(prods);
    }
}