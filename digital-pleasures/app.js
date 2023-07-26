// npm install express
// npm instal dotenv
// npm install ejs

const express = require ('express')
const path = require ('path')
const dotenv = require('dotenv').config();
const app = express()


const mainRouter = require('./source/routes/mainRouter');
const userRouter = require('./source/routes/userRouter');
const productRouter = require('./source/routes/productRouter');


app.listen(process.env.PORT || 3000, () => {
    console.log ("Servidor escuchando Puerto" + process.env.PORT || 3000 + " http://localhost:3000")
}) 

app.use('/', mainRouter)
app.use('/', userRouter)
app.use('/', productRouter)



app.use(express.static('public'));