const path = require('path')
const model = require('../models/productModel');
const multer = require ('multer')
const upload = multer({ dest: 'img/products' });


const controller = {
    cart: ('/cart', (req, res) => {
        res.render('cart')
    }),
    detail: ('/detail', (req, res) => {
        const productId = req.params.id;
        const product = model.findById(productId);
        //const similar = products.findAll()
        if (product != undefined) return res.render('detail', {product});
        else res.render('error404')
    }),
    edit: ('/edit', (req, res) => {
              
        console.log('Accedieron al panel de edicion del producto N° ' + req.params.id)

        const product = model.findById(Number(req.params.id));

        if (product != undefined){
        return res.render('edit', { product });
        }

        else res.redirect('error404')
  
    }),
    update: ('/update', (req, res) => {
        const updatedProduct = req.body;
        updatedProduct.id = Number(req.params.id)
        model.updateProduct(updatedProduct)
        res.redirect('/products/' + updatedProduct.id + '/detail')
        console.log("Funciona")
    })
    ,
    upload: ('/upload', (req, res) => {
        res.render('upload')
    }),
    deleteProduct: (req, res) => {
        model.delete(Number(req.params.id));

        res.render('deleted');
    },
    
    postProduct: (req, res) => {
        console.log(req.file);

        let categorias = []

        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias.push(req.body['cbox' + i]);
            }
            
        }
        

        const newProduct = {
            product: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.price,
            categories: categorias,
            stock: req.body.stock,
            img: req.file.filename
        }

        const createdProduct = model.createProduct(newProduct);
        
        res.redirect('/products/' + createdProduct.id + '/detail');

    
        //res.redirect('/products');
    }
    
}

module.exports = controller