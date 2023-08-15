const path = require('path')
const products = require('../models/productModel');
const model = require('../models/productModel');

const controller = {
    cart: ('/cart', (req, res) => {
        res.render('cart')
    }),
    detail: ('/detail', (req, res) => {
        const productId = req.params.id;
        const product = products.findById(productId);
        //const similar = products.findAll()
        res.render('detail', {product});
    }),
    edit: ('/edit', (req, res) => {
              
        console.log('Pidieron estan editando el producto N° ' + req.params.id)
        const product = products.findById(Number(req.params.id));

        res.render('edit', { product });
  
    }),
    update: ('/update', (req, res) => {
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.body.id)
        products.updateProduct(updatedProduct)
        res.redirect('/products/' + updatedProduct.id + '/detail')
        console.log("Funciona")
    })
    ,
    upload: ('/upload', (req, res) => {
        res.render('upload')
    }),
    deleteProduct: (req, res) => {
        products.delete(Number(req.params.id));

        res.render('deleted');
    },
    
    postProduct: (req, res) => {
        console.log(req.body);

        const newProduct = {
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.price,
            stock: req.body.stock
        }

        model.createProduct(newProduct);
        
        res.redirect('/products/upload');

    
        //res.redirect('/products');
    }
    
}

module.exports = controller