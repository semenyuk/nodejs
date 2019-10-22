const { Book } = require('../models');

module.exports = {
    getAll: (req, res) => Book.findAll({
        include: ['authors']
    }).then((books) => {
        res.send(books)
    })
};