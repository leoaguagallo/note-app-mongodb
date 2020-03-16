const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email', //datos del formulario
    passwordField: 'password'
}, async (email, password, done) => {
    //comprobar existencia
    const user = await User.findOne({email}) //consulta en db
    if(!user){
        return done(null, false, {message: 'Not user found'});
    } else {
        //validar contraseña
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        } else {
            return done(null, false, {message: 'Incorrect Password'});
        }
    }
}));

// iniciar session en servidor
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// permiso de session
passport.deserializeUser((id, done)  => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});