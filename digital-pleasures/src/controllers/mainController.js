const path = require('path')
const model = require('../models/productModel');

/* const { detail } = require('./productController') */


const controller = {
    index: ('/', (req, res) => {
        res.render('index', {model: products})
    }),

}

module.exports = controller