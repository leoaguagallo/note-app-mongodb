//servidor
const express = require('express');
//motor de plantillas html
const exphbs = require('express-handlebars');
const path = require('path');

//inicializacion
const app =  express();

//settings
app.set('port', process.env.PORT || 3000); //asignar puerto
app.set('views', path.join(__dirname, 'views')); //ruta de capeta
//handlebars (motor de plantillas)
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), //ubicacion de la carpeta layout
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');//motor de vistas


//Middlewares
app.use(express.urlencoded({extended: false})); //conversion a json

//Global Variables

//Routers
app.use(require('./routes/index.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//exportar el servidor
module.exports = app;
