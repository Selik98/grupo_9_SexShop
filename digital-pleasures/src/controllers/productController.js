const path = require('path')
const products = require('../models/productModel');

const controller = {
    cart: ('/cart', (req, res) => {
        res.render('cart')
    }),
    detail: ('/detail/:id', (req, res) => {
        const productId = req.params.id;
        console.log(products)
        const selectedProduct = products.findById(productId);
        res.render('detail', {products: selectedProduct});
    }),
    edit: ('/edit', (req, res) => {
              
        console.log('Pidieron estan editando el producto N° ' + req.params.id)
        const product = products.findById(Number(req.params.id));

        res.render('edit', { product });
  
    }),
    update: ('/update', (req, res) => {
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.params.id)
        products.updateProduct(updatedProduct)
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
        const createdProduct = products.createProduct(newProduct);

        res.redirect('/products/' + createdProduct.id + '/detail');

        //res.redirect('/products');
    }

    
    
    
}


module.exports = controller