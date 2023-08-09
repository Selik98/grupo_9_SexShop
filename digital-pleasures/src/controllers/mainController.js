const path = require('path')
const products = require('../models/productModel');

/* const { detail } = require('./productController') */


const controller = {
    index: ('/', (req, res) => {
        res.render('index', { products })
    }),

}

module.exports = controller