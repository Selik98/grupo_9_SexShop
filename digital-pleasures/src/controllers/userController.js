const userModel = require('../models/userModels');
const bcrypt = require('bcrypt');

const controller = {
    getLogin: (req, res) => {
        const error = req.query.error;

        res.render('login', { error });
    },

    getRegister: (req, res) => {
        const error = req.query.error;

        res.render('register', { error });
    },

    login: (req, res) => {
        const userInJson = userModel.findByEmail(req.body.email);

        // si el mail no esta en la base de datos:
        if (!userInJson) {
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }

        
        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        // Si la contraseña es válida
        if (validPw) {
            //para mantener sesion iniciada:
            if(req.body.remember === 'on'){
                //cookie del usuario;
                res.cookie('email', userInJson.email, { maxAge: 1000 * 60 * 60 * 24 * 365});
            } else {
                console.log('No se quiere mantener la sesión iniciada');
            }

            req.session.user = userInJson;

            res.redirect('/');
        } else {
            res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
    },

    register: (req, res) => {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
        }

        const user = userModel.create(newUser);

        if (user.error) {
            res.redirect('/users/register?error=' + user.error);
        } else {
            res.redirect('/');
        }
    },
    profile: ('/profile', (req, res) => {
        const userId = req.params.id;
        const user = userModel.findById(userId);
        console.log(user)
        if (user.category) user.category = "Si"
        else user.category = "No"
        //const similar = products.findAll()
        if (user != undefined) return res.render('profile', { user });
        else res.render('error404')
    }),
    edit: ('/editprofile', (req, res) => {

        console.log('Accedieron al panel de edicion del usuario N° ' + req.params.id)

        const user = userModel.findById(Number(req.params.id));

        if (user != undefined) {
            return res.render('editprofile', { user });
        }

        else res.redirect('error404')

    }),
    postUser: (req, res) => {

        if (req.body.password =! req.body.confirmPassword){
            console.log("Son Desiguales pelotudo")
        }

        const newUser = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            paisNacimiento: req.body.paisNacimiento,
            email: req.body.email,
            password: req.body.password,
            category: "user",
            img: req.file.filename

        }

        console.log(newUser);

        const createdUser = userModel.createUser(newUser);

        res.redirect('/user/' + createdUser.id + '/profile');


        //res.redirect('/products');
    }
}

module.exports = controller;