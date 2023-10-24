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
router.post('/login', userController.editprofile);

//formulario de registro
router.get('/register', userController.create);

// @POST - /user/create
router.post('/create', create.single('foto_usuario'), userController.postUser);

// @GET /user/profile 
router.get('/profile', userController.create);

//@GET /user/logout
//router.get('/logout', userController.logout);


// @GET /user/edit 
router.get('/editprofile', userController.editprofile);

// @put /user/:id/update
router.put('/update', create.single('img'), userController.update)

// @DELETE - /user/delete
router.delete('/delete', userController.deleteUser);



module.exports = router;