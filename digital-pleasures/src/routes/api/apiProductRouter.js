const express = require('express');
const router = express.Router();
const apiProductControler = require('../../controllers/api/apiProductControler');

//Rutas
//listado de todos los productos
router.get('/', apiProductControler.list);

router.get('/create', apiProductControler.create);
//crear un producto
router.post('/create', apiProductControler.postProduct);
//editar un producto
router.put('/:id/update', apiProductControler.update);
//Eliminar un producto
router.delete('/:id/delete', apiProductControler.deleteProduct);
//ver el detalle del producto
router.get('/:id/detail', apiProductControler.detail);
//buscar un producto
/* router.get('/:id/', apiProductControler.serch); */




module.exports = router;