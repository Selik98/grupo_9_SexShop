// npm install express
const express = require ('express')
const path = require ('path')

const app = express()


app.get('/', (req,res) => {
    console.log ('Hicieron un Request en "/"')
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/login.html', (req,res) => {
    console.log ('Hicieron un Request en "/login.html"')
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/register.html', (req,res) => {
    console.log ('Hicieron un Request en "/register.html"')
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/cart.html', (req,res) => {
    console.log ('Hicieron un Request en "/cart.html"')
    res.sendFile(path.join(__dirname, './views/cart.html'))
});

app.get('/detail.html', (req,res) => {
    console.log ('Hicieron un Request en "/detail.html"')
    res.sendFile(path.join(__dirname, './views/detail.html'))
});



app.listen(process.env.PORT, () => {
    console.log ("Servidor escuchando Puerto" + process.env.PORT + "http://localhost:3000")
}) 


app.use(express.static('public'));