const path = require('path')
const model = require('../models/userModels');
const multer = require('multer')
const create = multer({ dest: 'img/user' });
const db = require('../../database/models');
const uuid = require('uuid');
const {Usuario} = require('../../database/models');

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
     getLogin: async(req, res) => {
        const userId = req.params.id;
        try {
            const user = await db.Usuario.findByPk(userId, {
                raw: true
            })
            res.render('login', {user})
        } catch (error) {
            console.log(error);
        }
        
    },
    login: async (req, res) => {
        let user; // Declarar la variable user
    
        if (req.body.email) {
            user = await Usurio.findByPk({ where: { email: req.body.email } });
    
            if (!user) {
                let error = "El usuario o la contraseña son incorrectos";
                return res.render("login", { error });
            }
        } else {
            let error = "Correo electrónico requerido";
            return res.render("login", { error });
        }
    
        const validPw = bcrypt.compareSync(req.body.password, user.password);
        console.log("La contraseña es válida", validPw);
    
        if (validPw) {
            if (req.body.remember === 'on') {
                res.cookie('email', user.email, { maxAge: 1000 * 60 * 60 });
            }
            req.session.email = req.body.email;
            req.session.user = user;
            return res.redirect('/user/profile');
        } else {
            let error = "El usuario o la contraseña son incorrectos";
            res.render("login", { error });
            console.log('Contraseña no válida');
        }
    }
,    
    editprofile: async (req, res) => {

        const userId = req.params.id;
        try {
            const user = await db.Usuario.findByPk(userId,{
                raw:true
            })
            res.render('profile',{user})

        } catch (error) {
            console.log(error);
        }

    },
    update: async (req, res) => {
   
            let updatedUser = await db.Usuario.update({
                id: uuid.v4(),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fechaNacimiento: req.body.fechaNacimiento,
                paisNacimiento: req.body.paisNacimiento,
                email:req.body.email,
                password:req.body.password,
                img: req.file.filename
            }, {
                where: {id:req.params.id}
            })
            try{
                res.redirect('/user/' + req.params.id + '/login/')
        } catch (error) {
            console.log(error);
        }
    },
    create: ('/register', (req, res) => {
        res.render('register')
    }),
    
    getRegister: async (req, res) => {
        const error = "";

        res.render("register", { error });},
    
    deleteUser: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await db.Usuario.findByPk(id,{
                raw:true
            })
             db.Usuario.destroy({
                where: {
                    id
                }
            })
        
            res.redirect('/')
    
        } catch (error) {
            console.log(error);
        }
     
    },

    postUser: async (req, res) => {
       
        const newUser  = await db.Usuario.create (
            {
                id: uuid.v4(),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fechaNacimiento: req.body.fechaNacimiento,
                paisNacimiento: req.body.paisNacimiento,
                email:req.body.email,
                password:req.body.password,
                img: req.file.filename
            }
        ) 
        try {
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
       // const createdUser = model.createUser(newUser); 
      //  res.redirect('/user/' + this.editprofile + '/login/');
    } ,
    //cart: ('/cart', (req, res) => {
      //  res.render('cart', {user: req.session.user})}), 
}


module.exports = userController




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