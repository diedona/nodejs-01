const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');
routes.get("/product", productController.index);
routes.post("/product", productController.save);

//

module.exports = routes;