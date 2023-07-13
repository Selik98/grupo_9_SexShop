// npm install express
const express = require ('express')
const path = require ('path')

const app = express()


app.get('/', (req,res) => {
    console.log ('Hicieron un Request en "/"')
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/login', (req,res) => {
    console.log ('Hicieron un Request en "/login"')
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/register', (req,res) => {
    console.log ('Hicieron un Request en "/register"')
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/cart', (req,res) => {
    console.log ('Hicieron un Request en "/cart"')
    res.sendFile(path.join(__dirname, './views/cart.html'))
});

app.get('/detail', (req,res) => {
    console.log ('Hicieron un Request en "/detail"')
    res.sendFile(path.join(__dirname, './views/detail.html'))
});



app.listen(3000, () => {
    console.log ("Servidor escuchando Puerto 3000")
}) 


app.use(express.static('public'));