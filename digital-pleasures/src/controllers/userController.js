const userModel = require("../models/userModels");
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
            res.render("register", { error });

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
            res.render("register", { error });
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
    },

    profile: ("/profile", (req, res) => {
        const user = req.session.user;
        console.log(user);
        console.log("---------------------------------");
        if (user.category) user.category = "Si";
        else user.category = "No";
        //const similar = products.findAll()
        if (user != undefined) return res.render("profile", { user });
        else res.render("error404");
    }),

    edit: ("edit", (req, res) => {
        console.log(
            "Accedieron al panel de edicion del usuario N° " + req.params.id
        );
        const user = req.session.user;
        console.log('imprimiendo user', user)
        if (user != undefined) {
            return res.render("editprofile", { user });
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

        res.redirect("/user/" + updatedUser.id + "/profile");
    },
    deleteUser: (req, res) => {
        userModel.delete(Number(req.params.id));

        res.render("deleted");
    },
};

module.exports = controller;
