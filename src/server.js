//servidor
const express = require('express');
const path = require('path');

//inicializacion
const app =  express();

//settings
app.set('port', process.env.PORT || 3000); //asignar puerto
app.set('views', path.join(__dirname, 'views')); //ruta de capeta


//Middlewares
app.use(express.urlencoded({extended: false})); //conversion a json

//Global Variables

//Routers
app.get('/', (req, res) => {
    res.send('Hello Leo..');
});

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//exportar el servidor
module.exports = app;
