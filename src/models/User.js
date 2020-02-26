const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
},{
    timestamps: true
});

//funcion asincrona para encritar contraseñas
UserSchema.methods.encrypPassword = async password => {
    const salt =  await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt); //devuelve contrasenia cifrada
};

//Funcion para comparar contraseña de ingreso con la de la base de datos
UserSchema.methods.matchPassword = function(password) {
    return await bcrypt. compare(password, this.password);
}


module.exports = model('User', UserSchema);