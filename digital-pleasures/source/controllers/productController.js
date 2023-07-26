const path = require('path')


const controller = {
    cart: ('/cart', (req,res) => {
        res.render('cart')
}),
    detail: ('/detail', (req,res) => {
        res.render('detail')
}),
    edicion:('/edicion', (req,res) => {
        res.render('edicion')
}),
    carga: ('/carga', (req, res) => {
    res.render('carga')
    })
}


module.exports = controller