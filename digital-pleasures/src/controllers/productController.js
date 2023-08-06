const path = require('path')
const productModels = require('../models/productModels');
const model = productModels()

const controller = {
    cart: ('/cart', (req, res) => {
        res.render('cart')
    }),
    detail: ('/detail', (req, res) => {
        res.render('detail')
    }),
    edit: ('/edit', (req, res) => {
        console.log('Pidieron estan editando el producto N° ' + req.params.id)
        const id = req.params.id;

        const productModel = model.findById({ id })
        console.table(model)
        res.render('detalleMenu', { model })
    }),
    update: ('/update',(req,res) =>{
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.params.id)    
        model.updateProduct(updatedProduct)
        res.redirect('/products/'+ updatedProduct.id + '/detail')
    }) 
    ,
    upload: ('/upload', (req, res) => {
        res.render('upload')
    })
}


module.exports = controller