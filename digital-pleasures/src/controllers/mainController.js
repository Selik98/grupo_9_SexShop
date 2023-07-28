const path = require('path')
/* const { detail } = require('./productController') */


const controller = {
    index: ('/', (req, res) => {
        res.render('index')
    }),
    
}

module.exports = controller