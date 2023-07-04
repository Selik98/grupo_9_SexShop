//requerimos express para usarlo
const express = require('express');
const path = require('path');
//iniciamos un servidor y lo guardamos dentro de app
const app = express();

app.listen(7000, () => {
    console.log ("Servidor en Puerto 5000 | http://localhost:7000")
}) 


app.get('/', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/index.html'))
});


app.get('/login', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/login.html'))
});


app.get('/productCart', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});


app.get('/productDetail', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});


app.get('/register', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/register.html'))
});



const publicpath = path.resolve(__dirname, './public' ) ;
app.use(express.static());


