const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    //si es autenticado continua processo
    if (req.isAuthenticated()){
        return next();
    }
    //caso contrario redirecciona
    req.flash('error_msg', 'Not authorized');
    res.redirect('/users/signin');
}

module.exports = helpers;