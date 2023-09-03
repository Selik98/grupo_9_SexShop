const express = require('express');
const router =express.Router();
const multer = require('multer');
const path = require('path');
const userController =require ('../controllers/userController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img2"))
    },
    filename: (req, file, cb) => {
        console.log(file)
        const newfilename = Date.now() + '-' + file.originalname
        console.log(newfilename)
        cb(null, newfilename)
    }
})

const create = multer({ storage });

//formulario de login
router.get('/login', userController.login);

//formulario de registro
router.get('/register', userController.register);

// @GET /user/cart 
router.get('/cart', userController.cart);

// @GET /user/detail 
router.get('/:id/detail', userController.detail);

// @GET /user/:id/edit 
router.get('/:id/edit', userController.edit);

// @put /user/:id/update
router.put('/:id/update', create.single('img'), userController.update)

// @GET /user/create 
router.get('/create', userController.create);

// @DELETE - /user/:id/delete
router.delete('/:id/delete', userController.deleteUser);

// @POST - /user/create
router.post('/create', create.single('img'), userController.postUser);

module.exports = router;