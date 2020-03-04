const { Router } = require('Express');

const router = Router();

//importacion de funcionalidades de la rutas
const { 
    render_NoteFrom, 
    render_CreateNewNote, 
    render_Notes, 
    render_EditForm, 
    update_Note, 
    delete_notes 
} = require('../controllers/notes.cotroller');

//Nueva Nota
router.get('/notes/add', render_NoteFrom);
router.post('/notes/add', render_CreateNewNote);

//Obtener todas notas
router.get('/notes', render_Notes);

//Editar notas
router.get('/notes/edit/:id', render_EditForm); //return list
router.put('/notes/edit/:id', update_Note); //envia formulario

//Eliminar notas
router.delete('/notes/delete/:id', delete_notes);

module.exports = router;