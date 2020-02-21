const app = require('./server');

const PORT = app.get('port');

app.listen(PORT, ()=>{
    console.log('Server run in http://localhost:'+PORT);
})
