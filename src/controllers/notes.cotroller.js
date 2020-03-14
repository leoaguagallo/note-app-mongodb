const node_controller = {};

//modelo de base de datos
const Note = require('../models/Note');

node_controller.render_NoteFrom = (req, res) =>{
    res.render('notes/new-note');
}

node_controller.render_CreateNewNote = async (req, res) =>{
    //console.log(req.body); //datos del formulario
    const { title, description } = req.body;

    //guardar en base de datos
    const new_Note = new Note({title, description});
    //console.log(new_Note);
    await new_Note.save();

    //envio de mensajes
    req.flash('success_msg', 'Note add successfully');

    res.redirect('/notes'); //refescar
}

node_controller.render_Notes = async (req, res) =>{
    const all_notes = await Note.find();
    res.render('notes/all-notes', { all_notes });
}

node_controller.render_EditForm = async (req, res) => {
    const note = await Note.findById(req.params.id); //consulto en base de datos
    res.render('notes/edit-note', { note }); //envio al formulario la informacion
}

node_controller.update_Note = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});

    //mensaje
    req.flash('success_msg', 'Note update successfully');

    res.redirect('/notes');
}

node_controller.delete_notes = async (req, res) => {
    //obtener id ---> req.params.id
    await Note.findByIdAndDelete(req.params.id);

    //mensaje 
    req.flash('success_msg', 'Note deteled successfully');

    res.redirect('/notes'); //refescar
}

module.exports = node_controller;