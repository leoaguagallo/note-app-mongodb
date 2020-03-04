const node_controller = {};

node_controller.render_NoteFrom = (req, res) =>{
    res.render('notes/new-note');
}

node_controller.render_CreateNewNote = (req, res) =>{
    //console.log(req.body); //datos del formulario
    res.send('New Note');
}

node_controller.render_Notes = (req, res) =>{
    res.send('All Notes');
}

node_controller.render_EditForm = (req, res) => {
    res.send('Render Edit Form');
}

node_controller.update_Note = (req, res) => {
    res.send('Update Note');
}

node_controller.delete_notes = (req, res) => {
    res.send('Delete Notes');
}

module.exports = node_controller;