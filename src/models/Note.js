const {Schema, model} = require('mongoose')

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //campo para notas privadas por users
    user: {
        type: String,
        required: true
    }
},
{
    timestamps: true //campo de auditoria
});

module.exports =  model('Note', NoteSchema)