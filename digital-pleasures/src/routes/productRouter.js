const express = require('express');
const router =express.Router();
const multer = require('multer');
/* const upload = multer({ dest: '../public/img2'}); */
const path = require('path');
const productController = require ('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, './public/img2')); // Ruta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      const newFileName = Date.now() + '-' + path.extname(file.originalname);// Nombre de archivo único
      cb(null, file.fieldname + '-' + newFileName);
    }
  });
  
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
router.post('/products', upload.any('file') ,productController.postProduct);

module.exports = router