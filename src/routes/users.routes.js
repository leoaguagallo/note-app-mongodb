const { Router } = require('Express');

const router = Router();

const {
    render_signUpForm,
    render_signinForm,
    signup,
    signin,
    logout

} = require('../controllers/users.controllers');

router.get('/users/signup', render_signUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', render_signinForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);


module.exports = router;