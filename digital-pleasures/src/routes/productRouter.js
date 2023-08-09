const express = require('express');
const router =express.Router();
const productController = require ('../controllers/productController');


// @GET /products/cart 
router.get('/cart', productController.cart);

// @GET /products/detail 
router.get('/:id/detail', productController.detail);

// @GET /products/:id/edit 
router.get('/:id/edit', productController.edit);

// @put /products/:id/update
router.put('/:id/update', productController.update);

// @GET /products/upload 
router.get('/upload', productController.upload);









module.exports = router