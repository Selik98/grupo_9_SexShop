const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/api/apiProductsController');

// Obtener todos los productos
router.get('/', apiProductController.allProduct);

// Obtener un productos por ID
router.get('/:id', apiProductController.productById);

module.exports = router;