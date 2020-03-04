const{ Router } = require('express'); //acceso a propiedades especificas
const router = Router(); //return un objeto

//export de rutas
const { renderIndex, renderAbout } = require('../controllers/index.controller');

router.get('/', renderIndex );

router.get('/about', renderAbout );

module.exports = router;