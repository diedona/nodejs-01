const mongoose = require("mongoose");
const product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const prods = await product.find();
        return res.json(prods);
    },
    async save(req, res) {
        const newProduct = await product.create(req.body);
        return res.json(newProduct);
    }
}