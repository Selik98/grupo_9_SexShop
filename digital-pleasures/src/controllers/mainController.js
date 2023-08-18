const path = require('path')
const model = require('../models/productModel');

const controller = {
    index: ('/', (req, res) => {
        products = model.findAll()
        res.render('index', {products})
    }),

}

module.exports = controller