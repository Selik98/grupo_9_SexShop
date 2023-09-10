// npm install express
// npm instal dotenv
// npm install ejs
// npm install express-session
// npm install cookie-parser
//npm install bcrypt

const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config();
const app = express()
const methodOverride = require('method-override')
const session = (require('express-session'))
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');


const mainRouter = require('./src/routes/mainRouter');
const userRouter = require('./src/routes/userRouter');
const productRouter = require('./src/routes/productRouter');
const { nextTick } = require('process');

app.set('views', [
    path.join(__dirname, './src/views')
])
app.use(session({ secret: 's3cr370', resave: false, saveUninitialized: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());

app.use((req,res,next)=>{
    if(req.cookies.email){
        const userModel = require('./src/models/userModels');

        const user = userModel.findByEmail(req.cookies.email);
        req.session.user = user;
    }
    next();
})

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