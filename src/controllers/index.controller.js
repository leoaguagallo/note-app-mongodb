const index_controller = {};

index_controller.renderIndex = (req, res) => {
    res.render('index')
};

index_controller.renderAbout = (req, res) => {
    res.render('about')
};

module.exports = index_controller;