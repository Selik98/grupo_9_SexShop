const path = require('path');

const controller = {
    login: ('/login', (req, res) => {
        res.render('login')
    }),
    register: ('/register', (req, res) => {
        res.render('register')
    })
}

module.exports = controller;