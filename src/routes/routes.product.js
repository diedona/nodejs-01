const express = require('express');
const routes = express.Router();
const asyncMiddleware = require('../helpers/wrap-async');

const productController = require('../controllers/ProductController');
routes.get("/product", asyncMiddleware(productController.index));
routes.get("/product/paginated", asyncMiddleware(productController.getPaginate));
routes.get("/product/:id", asyncMiddleware(productController.detail));
routes.post("/product", asyncMiddleware(productController.save));
routes.put("/product/:id", asyncMiddleware(productController.update));
routes.delete("/product/:id", asyncMiddleware(productController.delete));

//

module.exports = routes;