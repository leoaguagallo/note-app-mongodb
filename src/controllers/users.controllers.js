const user_controller = {};

//renderizar formulario
user_controller.render_signUpForm = (req, res) => {
    res.render('users/signup');
};

//tomar datos del fomulario
user_controller.signup = (req, res) => {
    res.send('singup');
};

user_controller.render_signinForm = (req, res) => {
    res.render('users/signin');
};

user_controller.signin = (req, res) => {
    res.send('signin');
};

user_controller.logout = (req, res) => {
    res.send('logout');
};

module.exports = user_controller;