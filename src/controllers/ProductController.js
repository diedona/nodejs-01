const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const prods = await product.find();
        return res.json(prods);
    },
    async detail(req, res) {
        const productDetail = await product.find({_id:req.params.id}); //mongoose.findById
        return res.json(productDetail);
    },
    async save(req, res) {
        const newProduct = await product.create(req.body);
        return res.json(newProduct);
    },
    async update(req, res) {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(updatedProduct);
    },
    async delete(req, res) {
        await product.findByIdAndDelete(req.params.id);
        res.send();
    }
}