const path = require('path')
const model = require('../models/productModel');
const multer = require('multer')
const create = multer({ dest: 'img/products' });
const db = require('../../database/models')
const { validationResult } = require('express-validator');
const { raw } = require('body-parser');


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
        const errors = validationResult(req);
       let categorias = ""
        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias += req.body[i];
            }
        }
            let updatedProduct = await db.Producto.update({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                categories: categorias,
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
        let errors = req.query
        res.render('create', {errors})
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
    count: async (req, res) => {
        try {
          const product = await db.Producto.findAll();
          const formattedProduct = product.map((product) => ({
            id: product.id,
            titulo:product.titulo,
            descripcion:product.descripcion,
         
            detail: `/products/${product.id}`,
          }));
    
          const responseData = {
            count: product.length,
            users: formattedProduct,
          };
          if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            res.json(responseData);
          } else {
            res.render("products", { product });
          }
    
        } catch (error) {
          console.error(error);
        }
      },
    
      productById: async (req, res) => {
        const productId = req.params.id;
    
        try {
          const product = await db.Producto.findByPk(productId, {
            attributes: ['id', 'titulo', 'descripcion','img'],
          });
    
          if (!product) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
          }
    
    
          if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            res.json(product);
          } else {
            res.render("products", { product });
          }
    
        } catch (error) {
          console.error(error);
        }
      },

    postProduct: async (req, res) => {
        let categorias = '' // no se guarda en la base de datos
        try {
        let errors = validationResult(req)
        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias += ' ' + req.body['cbox' + i];
            }
        } 
        const newProduct  =
        {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categories: categorias,
            stock: req.body.stock, 
        }
            let newProductImg = {}
            if(req.file !== undefined){
                newProductImg = {
                    ...newProduct,
                    img: req.file.filename
                }
            }
            if (errors.isEmpty()) {
                await db.Producto.create(newProductImg, {raw:true})
                 res.redirect('/')
            }else {
                //lista de errores
                let queryArray = errors.errors.map(error => '&' + error.path + '=' + error.msg)
                let queryString = queryArray.join('')
                res.redirect("/products/create?" + queryString)
            }

        } catch (error) {
            console.log(error);
        }
        cart: ('/cart', (req, res) => {
            res.render('cart', {user: req.session.user})
        })
    }
    }

        /* console.log( errors ) */
    /* cart: ('/cart', (req, res) => {
        res.render('cart', {user: req.session.user})
    }) */



module.exports = controller