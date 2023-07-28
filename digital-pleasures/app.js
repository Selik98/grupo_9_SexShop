// npm install express
// npm instal dotenv
// npm install ejs

const express = require ('express')
const path = require ('path')
const dotenv = require('dotenv').config();
const app = express()

app.set('view engine', 'ejs');


const mainRouter = require('./src/routes/mainRouter');
const userRouter = require('./src/routes/userRouter');
const productRouter = require('./src/routes/productRouter');

app.set('views', [
    path.join(__dirname, './src/views')
])

app.listen(process.env.PORT || 3000, () => {
    console.log ("Servidor escuchando Puerto" + process.env.PORT || 3000 + " http://localhost:3000")
}) 

app.use('/', mainRouter)
app.use('/', userRouter)
app.use('/', productRouter)



app.use(express.static('public'));