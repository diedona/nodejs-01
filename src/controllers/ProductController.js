const productService = require('../services/ProductService');

module.exports = {
    async index(req, res) {
        const prods = await productService.getAll();
        return res.json(prods);
    },
    async getPaginate(req, res) {
        //destructuring w/ default value
        const { page = 1} = req.query;
        const prods = await productService.getPaginated(page, 3);
        return res.json(prods);
    },
    async detail(req, res) {
        const productDetail = await productService.getById(req.params.id);
        return res.json(productDetail);
    },
    async save(req, res) {
        const newProduct = await productService.save(req.body);
        return res.json(newProduct);
    },
    async update(req, res) {
        const updatedProduct = await productService.update(req.params.id, req.body);
        return res.json(updatedProduct);
    },
    async delete(req, res) {
        await productService.delete(req.params.id);
        res.send();
    }
}