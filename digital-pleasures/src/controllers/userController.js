const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const multer = require("multer");
const create = multer({ dest: "img/users" });

const controller = {
  getLogin: (req, res) => {
    const error = req.query.error;

    res.render("login", { error });
  },

  getRegister: (req, res) => {
    const error = req.query.error;

    res.render("register", { error });
  },

  login: (req, res) => {
    const userInJson = userModel.findByEmail(req.body.email);
    // si el mail no esta en la base de datos:
    if (!userInJson) {
      //error = "El usuario o la contraseña son incorrectos"
      return res.redirect(
        "/user/login?error= El usuario o la contraseña son incorrectos"
      );
    }
    console.log("Se intentó acceder al usuario de " + userInJson.email);

    const validPw = bcrypt.compareSync(req.body.password, userInJson.password);
    console.log("la contraseña es valida", validPw);
    // Si la contraseña es válida
    if (validPw) {
        if(req.body.remember === 'on'){
          //crear una cookie
          res.cookie('email', userInJson.email, {maxAge: 1000 * 60 * 60 })
        }
        req.session.user = userInJson
        res.redirect('/user/'+ userInJson.id + '/profile');
    } else {
      res.redirect("/user/login?error= El usuario o la contraseña son incorrectos")
      console.log('la contraseña es invalida');
    }
  },
  
  postUser: (req, res) => {
    const newUser = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      paisNacimiento: req.body.paisNacimiento,
      email: req.body.email,
      password: req.body.password,
      category: "user",
      img: req.file.filename,
    };
    const user = userModel.create(newUser);

    if ((req.body.password = !req.body.confirmPassword)) {
      console.log("Son Desiguales pelotudo");
    }
    if (user.error) {
      res.redirect("/users/register?error=" + user.error);
    } else {
      res.redirect('/');
    }

    /* const createdUser = userModel.createUser(newUser);
        
    res.redirect('/user/' + createdUser.id + '/profile'); */

    //res.redirect('/products');
  },

  profile:("/profile",(req, res) => {
      const userId = req.params.id;
      const user = userModel.findById(userId);
      console.log(user);
      if (user.category) user.category = "Si";
      else user.category = "No";
      //const similar = products.findAll()
      if (user != undefined) return res.render("profile", { user });
      else res.render("error404");
    }),

  edit:("edit",(req, res) => {
      console.log(
        "Accedieron al panel de edicion del usuario N° " + req.params.id
      );
      const userId = req.params.id
      const user = userModel.findById(userId);
      console.log('imprimiendo user', user)
      if (user != undefined) {
      return res.render("/user",{ user });
      } else res.redirect("error404")
    }),

  update: (req, res) => {
    let updatedUser = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      paisNacimiento: req.body.paisNacimiento,
      email: req.body.email,
      password: req.body.password,
      category: "user",
      img: req.file.filename,
    };

    console.log(updatedUser);

    userModel.updateUser(updatedUser);

    res.redirect("/user/" + updatedUser.id + "/detail");
  },
  deleteUser: (req, res) => {
    userModel.delete(Number(req.params.id));

    res.render("deleted");
  },
};

module.exports = controller;
