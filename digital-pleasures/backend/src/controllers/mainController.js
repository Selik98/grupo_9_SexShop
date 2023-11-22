const path = require('path')
const db = require('../../database/models')
const model = require('../models/productModel');

const controller = {
    index: async (req,res)=> {
        let isAdmin = false
        if (req.session.user){
            isAdmin = req.session.user.admin != undefined 
        }
        console.log (isAdmin)
        try {
            const products = await db.Producto.findAll()
            res.render('index', {products , isAdmin})
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = controller