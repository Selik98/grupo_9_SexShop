const express = require('express');
const router =express.Router();
const multer = require('multer');
const path = require('path');
const userController =require ('../controllers/userController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../public/imgUser"))
    },
    filename: (req, file, cb) => {
      const newfilename = Date.now() + '-' + file.originalname
      cb(null, newfilename)
    }
  })
  
  const create = multer({ storage });


// @GET - /user/login
router.get('/login', userController.getLogin);

// @POST - /user/login
router.post('/login', userController.login);

//formulario de registro
router.get('/register', userController.getRegister);

// @POST - /user/create
router.post('/create', create.single('foto_usuario'), userController.postUser);

// @GET /user/detail 
router.get('/:id/profile', userController.profile);

// @GET /user/:id/edit 
router.get('/:id/edit', userController.edit);

// @put /user/:id/update
//router.put('/:id/update', create.single('img'), userController.update)

// @DELETE - /user/:id/delete
//router.delete('/:id/delete', userController.deleteUser);



module.exports = router;