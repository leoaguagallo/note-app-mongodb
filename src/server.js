//servidor
const express = require('express');
//motor de plantillas html
const exphbs = require('express-handlebars');
const path = require('path');
//tipos fr petiviones
const morgan = require('morgan');
const methodOverride = require('method-override');
//mensajes 
const flash = require('connect-flash');
//sessiones
const session = require('express-session');


//inicializacion del servidor
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
app.use(morgan('dev'));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

//Global Variables

//-->capturar mensajes de cualquier vista
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg'); 
    res.locals.error_msg = req.flash('error_msg');
    next();
});

//Routers
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//exportar el servidor
module.exports = app;
