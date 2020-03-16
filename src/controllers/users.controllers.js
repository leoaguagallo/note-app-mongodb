const user_controller = {};

//IMPORTAR MODELO >>-- USERS ---<<
const User = require('../models/User');

// import paquete
const passport = require('passport');

//renderizar formulario
user_controller.render_signUpForm = (req, res) => {
    res.render('users/signup');
};

//tomar datos del fomulario
user_controller.signup = async (req, res) => {
    //console.log(req.body); //recibir datos del formulario

    const errors = [];
    const { name, email, password, confirm_password } = req.body;

    //validacion
    if (password != confirm_password){
        errors.push({text: 'Password do not match'});
    }
    if (password.length < 4){
        errors.push({text: 'Password must be at least 4 characters.'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name, //devolver al formulario datos ingresados por usuario
            email,
            password,
            confirm_password
        });
    }else{
        //guardar usuario
        const email_user = await User.findOne({email}); //consulta db

        if (email_user){
            req.flash('error_msg', 'The email is alredy in use');
            res.redirect('/users/signup');
        }else{
            const new_user = new User({name, email, password});
            new_user.password = await new_user.encryptPassword(password);
            await new_user.save();
            req.flash('success_msg', 'You are registered!');
            res.redirect('/users/signin');
        }
    }

};

user_controller.render_signinForm = (req, res) => {
    res.render('users/signin');
};

user_controller.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

user_controller.logout = (req, res) => {
    //eliminar seccion del servidor
    req.logout();
    req.flash('success_msg', 'You are logged out now.');
    res.redirect('/users/signin');
};

module.exports = user_controller;