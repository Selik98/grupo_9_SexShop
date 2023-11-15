const path = require("path");
const model = require("../models/userModels");
const multer = require("multer");
const create = multer({ dest: "img/user" });
const db = require("../../database/models");
const uuid = require("uuid");
const { Usuario } = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
/* const userController = {
    login: async (req, res) => {
        // Implementa la lógica de inicio de sesión
        // Puedes utilizar el modelo Usuario para buscar al usuario por su email
        // y validar la contraseña

        // Ejemplo:
        const { email, password } = req.body;
        const user = await Usuario.findOne({ where: { email } });

        if (!user || !user.validarPassword(password)) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }

        // Si las credenciales son válidas, puedes establecer la sesión y redirigir
        req.session.userId = user.id;
        res.redirect('/user/profile');
    },

    crearPerfil: async (req, res) => {
        // Implementa la lógica de creación de perfil
        // Utiliza el modelo Perfil para crear un nuevo perfil en la base de datos

        // Ejemplo:
        const { nombre, apellido, fechaNacimiento } = req.body;

        try {
            const perfil = await Perfil.create({
                nombre,
                apellido,
                fechaNacimiento,
                usuarioId: req.session.userId, // Asocia el perfil con el usuario actual
            });

            res.json(perfil);
        } catch (error) {
            res.status(400).json({ error: "Error al crear el perfil" });
        }
    },

    editarPerfil: async (req, res) => {
        // Implementa la lógica de edición de perfil
        // Utiliza el modelo Perfil para actualizar los datos del perfil

        // Ejemplo:
        const { nombre, apellido, fechaNacimiento } = req.body;
        const usuarioId = req.session.userId; // Obtén el ID del usuario en sesión

        try {
            const [rowsUpdated, [perfil]] = await Perfil.update(
                { nombre, apellido, fechaNacimiento },
                { where: { usuarioId }, returning: true }
            );

            if (rowsUpdated === 0) {
                return res.status(404).json({ error: "Perfil no encontrado" });
            }

            res.json(perfil);
        } catch (error) {
            res.status(400).json({ error: "Error al actualizar el perfil" });
        }
    },
}; */

//_______________________________________________PRIMER MODELO___________________________________________________________________
const userController = {
  getLogin:
    ("/login",
    (req, res) => {
      let error = req.query.error;
      console.log(error);
      res.render("login", { error });
    }),

  postlogin: async (req, res) => {
    let error = req.query;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    try {
      const userLogin = await db.Usuario.findOne({
        where: { email: userEmail },
      });
      if (!userLogin) {
        return res.render("/login", { error });
      }
      const validPw = bcrypt.compareSync(userPassword, userLogin.password);
      if (validPw) {
        req.session.user = userLogin;
        if (req.body.remember === "on") {
          res.cookie("email", userEmail, { maxAge: 1000 * 60 * 60 * 24 * 365 });
        } else {
          console.log("No se quiere mantener la sesión iniciada");
        }
        return res.redirect("/user/profile");
      } else {
        return res.redirect(
          "/user/login?error=El correo o la contraseña son incorrectos"
        );
      }
    } catch (error) {
      console.log(error);
      res.redirect(
        "/user/login?error=Ha ocurrido un error en el inicio de sesión"
      );
    }
  },
  getProfile: (req, res) => {
    const user = req.session.user
    res.render('profile', {user})
  },

  editprofile: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db.Usuario.findByPk(userId, {
        raw: true,
      });
      res.render("editprofile", { user });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    let updatedUser = await db.Usuario.update(
      {
        id: uuid.v4(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        paisNacimiento: req.body.paisNacimiento,
        email: req.body.email,
        password: req.body.password,
        img: req.file.filename,
      },
      {
        where: { id: req.params.id },
      }
    );
    try {
      res.redirect("/user/" + req.params.id + "/login/");
    } catch (error) {
      console.log(error);
    }
  },
  create:
    ("/register",
    (req, res) => {
      res.render("register", { error });
    }),

  getRegister: async (req, res) => {
    let error = req.query;

    res.render("register", { error });
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await db.Usuario.findByPk(id, {
        raw: true,
      });
      db.Usuario.destroy({
        where: {
          id,
        },
      });

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  profile: async(req, res) => {
    const userId = req.params.id;
    try {
        const user = await db.Usuario.findByPk(userId, {
            raw: true
        })
        res.render('profile', {user})
    } catch (error) {
        console.log(error);
    }
  },

  postUser: async (req, res) => {
    try {
      let errors = validationResult(req);
      let newUser = {
        id: uuid.v4(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        paisNacimiento: req.body.paisNacimiento,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      };
      let newUserImg = {};
      if (req.file !== undefined) {
        newUserImg = {
          ...newUser,
          img: req.file.filename,
        };
      }
      if (errors.isEmpty()) {
        const usersInDB = await db.Usuario.findAll({
          raw: true,
        });

        let emailExisted = "";

        usersInDB.forEach((user) => {
          if (user.email == req.body.email) {
            emailExisted = user.email;
          }
        });

        if (emailExisted == req.body.email) {
          return res.redirect(
            "/user/register?emailExist=" + "El email ya existe"
          );
        } else {
          await db.Usuario.create(newUserImg, { raw: true });
          res.redirect("/profile");
        }
      } else {
        //lista de errores
        let queryArray = errors.errors.map(
          (error) => "&" + error.path + "=" + error.msg
        );
        let queryString = queryArray.join("");
        res.redirect("/user/register?" + queryString);
      }
    } catch (error) {
      console.log(error);
    }
    // const createdUser = model.createUser(newUser);
    //  res.redirect('/user/' + this.editprofile + '/login/');
  },

  allUsers: async (req, res) => {
    try {
      const user = await db.Usuario.findAll();
      const formattedUsers = user.map((user) => ({
        return:{
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        img: 'http://localhost:3000/public/imgUser/' + user.img
        }
      }));

      res.json({
        count: user.length,
        users: formattedUsers,
      });
      

    } catch (error) {
      console.error(error);
    }
  },

  userById: async (req, res) => {

      const user = await db.Usuario.findOne({
        where: {id: req.params.id},
        attributes: ['id', 'nombre', 'apellido', 'email', 'img'],
      })

      res.json({
        data: {
          ...user.dataValues,
          urlImg: 'http://localhost:3000/public/imgUser/' + user.dataValues.img,
        }
      })
  }
  
};

module.exports = userController;

//_________________________________________________________CON JSON________________________________________________________

/* const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const multer = require("multer");
const create = multer({ dest: "img/users" });

const controller = {
    getLogin: (req, res) => {
        const user = req.session.user

        if (user) {

            res.redirect("/user/profile")


        }

        else {
            const error = "";

            res.render("login", { error });
        }
    },

    getRegister: (req, res) => {
        const error = "";

        res.render("register", { error });
    },

    login: (req, res) => {
        const userInJson = userModel.findByEmail(req.body.email);

        if (!userInJson) {
            let error = "El usuario o la contraseña son incorrectos"
            res.render("login", { error });

        }
        console.log("Se intentó acceder al usuario de " + userInJson.email);

        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);
        console.log("la contraseña es valida", validPw);

        if (validPw) {

            if (req.body.remember === 'on') {
                res.cookie('email', userInJson.email, { maxAge: 1000 * 60 * 60 })
            }
            req.session.email = req.body.email;
            req.session.user = userInJson
            res.redirect('/user/profile');
        } else {
            let error = "El usuario o la contraseña son incorrectos"
            res.render("login", { error });
            console.log('Contraseña no valida');
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
/*     }, */

/*  profile: ("/profile", (req, res) => {
        const user = req.session.user;
        console.log(user);
        console.log("---------------------------------");
        if (user.category == "user") user.category = "No";
        else user.category = "Si";
        //const similar = products.findAll()
        if (user != undefined) return res.render("profile", { user });
        else res.render("error404");
    }),

    edit: ("edit", (req, res) => {
  //      console.log( "Accedieron al panel de edicion del usuario N° " + req.session.user.id );
        const user = req.session.user;
  //      console.log('imprimiendo user', user)
        if (user != undefined) {
            return res.render("editprofile", { user });
        } else res.redirect("error404")
    }),

    update: (req, res) => {

        let updatedUser = req.session.user

        console.log(req.body);

        if (req.body.nombre) updatedUser.nombre = req.body.nombre
        if (req.body.apellido) updatedUser.apellido = req.body.apellido
        if (req.body.fechaNacimiento) updatedUser.fechaNacimiento = req.body.fechaNacimiento
        if (req.body.paisNacimiento) updatedUser.paisNacimiento = req.body.paisNacimiento
        if (req.body.password) updatedUser.password = req.body.password
        if (req.body.img) updatedUser.img = req.body.img
        
    console.log(updatedUser) */

//  console.log(updatedUser);
/* 
        userModel.updateUser(updatedUser);

        res.redirect("/user/profile");
    },
    deleteUser: (req, res) => {
        userModel.delete(req.session.user.id);

        res.render("deletedUser");
    },
    logout: (req, res) => {

        req.session.destroy((err) => {
            if (err) {
                console.error("Error al destruir la sesión:", err);
            } else {
                res.clearCookie('email');
                res.redirect("/user/login");
            }
        })

    }
};

module.exports = controller;
 */
