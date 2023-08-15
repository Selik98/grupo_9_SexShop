const express = require('express');
const router = express.Router();
const multer = require('multer');
/* const upload = multer({ dest: '../public/img2'}); */
const path = require('path');
const productController = require('../controllers/productController');

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

const upload = multer({ storage });


// @GET /products/cart 
router.get('/cart', productController.cart);

// @GET /products/detail 
router.get('/:id/detail', productController.detail);

// @GET /products/:id/edit 
router.get('/:id/edit', productController.edit);

// @put /products/:id/update
router.put('/:id/update', productController.update)

// @GET /products/upload 
router.get('/upload', productController.upload);

// @DELETE - /products/:id/delete
router.delete('/:id/delete', productController.deleteProduct);

// @POST - /products/create
router.post('/create', upload.single('img'), productController.postProduct);

module.exports = router