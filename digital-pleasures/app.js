// npm install express
// npm instal dotenv
// npm install ejs

const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config();
const app = express()
const methodOverride = require('method-override')
const session = (require('express-session'))

app.set('view engine', 'ejs');


const mainRouter = require('./src/routes/mainRouter');
const userRouter = require('./src/routes/userRouter');
const productRouter = require('./src/routes/productRouter');

app.set('views', [
    path.join(__dirname, './src/views')
])

app.use(session({ secret: 's3cr370', resave: false, saveUninitialized: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRouter)
app.use('/user', userRouter)
app.use('/products', productRouter)
app.use((req, res,) => {
    res.render('error404');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor escuchando Puerto" + process.env.PORT + " http://localhost:3000")
})


// Documento Actualizado