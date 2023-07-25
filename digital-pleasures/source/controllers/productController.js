const path = require('path')


const controller = {
    cart: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/cart.html'))
},
    detail: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/detail.html'))
},
    edicion:(req,res) => {
        res.sendFile(path.join(__dirname, '../views/edicion.html'))
},
    carga:(req,res) => {
        res.sendFile(path.join(__dirname, '../views/carga.html'))
}
}

module.exports = controller