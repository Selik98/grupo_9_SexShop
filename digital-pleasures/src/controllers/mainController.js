const path = require('path')
const products = require('../models/productModel');

const controller = {
    index: ('/', (req, res) => {
<<<<<<< HEAD
        res.render('index', {model})
=======
        res.render('index', { products })
>>>>>>> 3e8b8c26a9fac037120398f3eaabe0b266c27cd0
    }),

}

module.exports = controller