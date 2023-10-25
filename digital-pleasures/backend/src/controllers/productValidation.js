const { validationResult } = require('express-validator')
const db = require('../../database/models')


module.exports = {
    createNewProduct : (req, res) => {
        console.log(req)
        const resultValidation = validationResult(req.body.titulo);
        if(resultValidation.errors.length < 0){
            db.Producto.create({
            })
        }else{
            res.render('create', {errors: validationResult.errors})
        }
    }
}