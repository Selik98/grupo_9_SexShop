//requerimos express para usarlo
const express = require('express');
const path = require('path');

const publicpath = path.resolve(__dirname, './public' ) ;
app.use(express.static());

//iniciamos un servidor y lo guardamos dentro de app
const app = express();



