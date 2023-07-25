const express = require('express');
const router =express.Router();
const productController = require ('../controllers/productController');

router.get('/cart', productController.cart);
router.get('/detail', productController.detail);
router.get('/edicionProducto', productController.edicionProducto);
router.get('/cargaProducto', productController.cargaProducto);

module.exports = router