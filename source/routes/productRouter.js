const express = require('express');
const router =express.Router();
const productController = require ('../controllers/productController');

router.get('/cart', productController.cart);
router.get('/detail', productController.detail);
router.get('/edicion', productController.edicion);
router.get('/carga', productController.carga);

module.exports = router