const express = require('express');
const routes = express.Router();
const asyncMiddleware = require('../helpers/wrap-async');
const auth = require("../middleware/auth");

const productController = require('../controllers/ProductController');
routes.get("/product", auth, asyncMiddleware(productController.index));
routes.get("/product/paginated", auth, asyncMiddleware(productController.getPaginate));
routes.get("/product/:id", auth, asyncMiddleware(productController.detail));
routes.post("/product", auth, asyncMiddleware(productController.save));
routes.put("/product/:id", auth, asyncMiddleware(productController.update));
routes.delete("/product/:id", auth, asyncMiddleware(productController.delete));

//

module.exports = routes;