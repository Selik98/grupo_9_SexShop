const path = require('path');
const model = require('../models/userModels');
const multer = require('multer')
const create = multer({ dest: 'img/products' });

const controller = {
    login: ('/login', (req, res) => {
        res.render('login')
    }),

    register: ('/register', (req, res) => {
        res.render('register')
    }),

    cart: ('/cart', (req, res) => {
        res.render('cart')
    }),

    detail: ('/detail', (req, res) => {
        const userId = req.params.id;
        const user = model.findById(userIdId);
        if (user != undefined) return res.render('detail', { user });
        else res.render('error404')
    }),

    edit: ('/edit', (req, res) => {

        console.log('Accedieron al panel de edicion del usuario N° ' + req.params.id)

        const user = model.findById(Number(req.params.id));

        if (user != undefined) {
            return res.render('edit', { user });
        }

        else res.redirect('error404')

    }),

    update: (req, res) => {

        let updatedUser = {
            id: Number(req.params.id),   
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            paisNacimiento: req.body.paisNacimiento,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category,
            img: req.file.filename
        };

        console.log(updatedUser)

        model.updateUser(updatedUser)

        res.redirect('/users/' + updatedUser.id + '/detail')
    },

    create: ('/create', (req, res) => {
        res.render('create')
    }),

    deleteUser: (req, res) => {
        model.delete(Number(req.params.id));

        res.render('deleted');
    },

    postUser: (req, res) => {
        console.log(req.file);

        const newUser = {
            id: Number(req.params.id),   
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            paisNacimiento: req.body.paisNacimiento,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category,
            img: req.file.filename
        }


        const createdUser = model.createUser(newUser);

        res.redirect('/users/' + createdUser.id + '/detail');

    }

}

module.exports = controller