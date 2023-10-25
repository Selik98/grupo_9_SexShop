const { error } = require('console');
const {body} = require ('express-validator')
const path = require('path')

module.exports = {
    validationProducts: [
        body('titulo').notEmpty().withMessage('debes completar el nombre del producto')
        .isLength({min:5}).withMessage('debe tener al menos 5 caracteres'), 
        body('descripcion').notEmpty().withMessage('debes agregar una descripcion del producto')
        .isLength({min:20}).withMessage('debe contener minimo 20 caracteres'),
        body('img').custom((value, {req})=> {
            const file = req.file
            const extensions = ['.jpg', '.png', '.jpeg', '.gif'];
            if(file){
                const fileExtensions = path.extname(file.originalname);
                if(!extensions.includes(fileExtensions)){
                    throw new error('las extensiones permitidas son ' + extensions)
                }else{
                    throw new error('tienes que subir una imagen')
                }
            }
            console.log(body)
            return true;
        })
    ]
}