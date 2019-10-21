const { Book } = require('../models');

module.exports = {
    getAll: (req, res) => Book.findAll().then((books) => {
        res.send(books)
    })
};