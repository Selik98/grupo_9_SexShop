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

// @DELETE - /products/:id/delete
router.delete('/:id/delete', productController.deleteProduct);

<<<<<<< HEAD
// @GET /products/upload 
router.get('/upload', productController.upload);

// @POST - /products
router.post('/products/create', productController.postProduct);
=======
// @POST - /products/create
<<<<<<< HEAD
router.post('/create', productController.postProduct);
>>>>>>> 26fa7f2479dc8e6dc1fee08ae41049583f7f813a
=======
router.post('/create', upload.any('/') , productController.postProduct);
>>>>>>> ccda5f9a8bdacb47f42c0c55038c132c2ab04844

module.exports = router