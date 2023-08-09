const path = require('path')
const model = require('../models/productModel');

const controller = {
    cart: ('/cart', (req, res) => {
        res.render('cart')
    }),
    detail: ('/detail/:id', (req, res) => {
        const productId = req.params.id;
        const selectedProduct = model.findById(productId);

        res.render('detail', {model: selectedProduct});
    }),
    edit: ('/edit', (req, res) => {
        console.log('Pidieron estan editando el producto N° ' + req.params.id)
        const id = req.params.id;

        const productModel = model.findById({ id })
        res.render('detalleMenu', { model })
    }),
    update: ('/update', (req, res) => {
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.params.id)
        model.updateProduct(updatedProduct)
        res.redirect('/products/' + updatedProduct.id + '/detail')
    })
    ,
    upload: ('/upload', (req, res) => {
        res.render('upload')
    }),
    product: (req,res) => {
        
        const newProduct = {
            product: req.body.product,
            price: req.body.price,
            categories: req.body.categories,
            
        }
        const createdProduct = model.createProduct(newProduct);

        res.redirect('/products/' + createdProduct.id + '/detail');

        //res.redirect('/products');
    }

    
    
    
}


module.exports = controller