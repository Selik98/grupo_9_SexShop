const path = require('path')
const model = require('../models/productModel');

const controller = {
    index: ('/', (req, res) => {
        products = model.findAll()
        res.render('index', {user:req.session.user})
    }),

}

module.exports = controller