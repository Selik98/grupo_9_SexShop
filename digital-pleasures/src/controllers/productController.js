const path = require('path')


const controller = {
    cart: ('/cart', (req,res) => {
        res.render('cart')
}),
    detail: ('/detail', (req,res) => {
        res.render('detail')
}),
    edit:('/edit', (req,res) => {
        res.render('edit')
}),
    upload: ('/upload', (req, res) => {
    res.render('upload')
    })
}


module.exports = controller