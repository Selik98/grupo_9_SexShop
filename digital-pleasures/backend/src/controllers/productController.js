const path = require('path')
const model = require('../models/productModel');
const multer = require('multer')
const create = multer({ dest: 'img/products' });
const db = require('../../database/models')


const controller = {
    detail: async(req, res) => {
        const productId = req.params.id;
        try {
            const product = await db.Producto.findByPk(productId, {
                raw: true
            })
            res.render('detail', {product})
        } catch (error) {
            console.log(error);
        }
        
    },

    edit: async (req, res) => {

        const productId = req.params.id;
        try {
            const product = await db.Producto.findByPk(productId,{
                raw:true
            })
            res.render('edit', {product})

        } catch (error) {
            console.log(error);
        }

    },
    update: async (req, res) => {
       /* let categorias = {}
        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias.push(req.body['cbox' + i]);
            }
        } */
            let updatedProduct = await db.Producto.update({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                /* categories: categorias, */
                stock: req.body.stock,
                img: req.file.filename
            }, {
                where: {id:req.params.id}
            })
            try{
                res.redirect('/products/' + req.params.id + '/detail')
        } catch (error) {
            console.log(error);
        }
    },
    create: ('/create', (req, res) => {
        res.render('create')
    }),

    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await db.Producto.findByPk(id,{
                raw:true
            })
             db.Producto.destroy({
                where: {
                    id
                }
            })
        
            res.redirect('/')
    
        } catch (error) {
            console.log(error);
        }
     
    },

    postProduct: async (req, res) => {
        let categorias = []
        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias.push(req.body['cbox' + i]);
            }
        }
        const newProduct  = await db.Producto.create (
            {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                /* categories: categorias, */
                stock: req.body.stock,
                img: req.file.filename
            }
        ) 
        try {
            res.redirect('/products/' + newProduct.id + '/detail')
        } catch (error) {
            console.log(error);
        }
        const createdProduct = model.createProduct(newProduct);
        res.redirect('/products/' + createdProduct.id + '/detail');
    },
    cart: ('/cart', (req, res) => {
        res.render('cart', {user: req.session.user})
    }),

}

module.exports = controller