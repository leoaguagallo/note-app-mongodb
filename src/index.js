require('dotenv').config(); //cargar variables de .env (seguridad)

const app = require('./server');
require('./database');

const PORT = app.get('port');

app.listen(PORT, ()=>{
    console.log('Server run in http://localhost:'+PORT);
})