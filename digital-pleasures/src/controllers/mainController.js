const path = require('path')
const db = require('../../database/models')
const model = require('../models/productModel');

const controller = {
    index: async (req,res)=> {
        try {
            const products = await db.Producto.findAll()
            res.render('index', {products})
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = controller