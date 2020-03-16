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

//IMPORTAR VALIDACION DE SECCIONES
const { isAuthenticated } =  require('../helpers/validation');

//Nueva Nota
router.get('/notes/add', isAuthenticated, render_NoteFrom);
router.post('/notes/new-note', isAuthenticated, render_CreateNewNote);

//Obtener todas notas
router.get('/notes', isAuthenticated, render_Notes);

//Editar notas
router.get('/notes/edit/:id', isAuthenticated, render_EditForm); //return list
router.put('/notes/edit/:id', isAuthenticated, update_Note); //envia formulario

//Eliminar notas
router.delete('/notes/delete/:id', isAuthenticated, delete_notes);

module.exports = router;