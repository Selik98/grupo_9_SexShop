const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/api/apiUserController');

// Obtener todos los usuarios
router.get('/', apiUserController.allUsers);

// Obtener un usuario por ID
router.get('/:id', apiUserController.userById);

module.exports = router;