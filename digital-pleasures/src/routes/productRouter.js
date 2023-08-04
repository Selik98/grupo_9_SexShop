const express = require('express');
const router =express.Router();
const productController = require ('../controllers/productController');


// @GET /products/cart 
router.get('/cart', productController.cart);

// @GET /products/detail 
router.get('/detail', productController.detail);

// @GET /products/edit 
router.get('/edit', productController.edit);

// @GET /products/upload 
router.get('/upload', productController.upload);

module.exports = router