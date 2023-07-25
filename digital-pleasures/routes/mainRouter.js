const express = require('express');
const router =express.Router();
const userController =require ('../controllers/userController');

router.get('/', mainController.index);
router.get('/cart', mainController.cart);
router.get('/detail', mainController.detail);
router.get('/edicionProducto', mainController.edicionProducto);
router.get('/cargaProducto', mainController.cargaProducto);

module.exports = router