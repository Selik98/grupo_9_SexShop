const path = require('path')
const model = require('../models/productModel');

const controller = {
    index: ('/', (req, res) => {
        res.render('index', {model})
    }),

}

module.exports = controller