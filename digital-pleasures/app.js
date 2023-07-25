// npm install express
const express = require ('express')
const path = require ('path')
const dotenv = require('dotenv').config();
app.use(express.static('public'));
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');

const app = express()

app.listen(process.env.PORT, () => {
    console.log ("Servidor escuchando Puerto" + process.env.PORT + " http://localhost:3000")
}) 

app.use('/',mainRouter)
app.use('/user', userRouter)