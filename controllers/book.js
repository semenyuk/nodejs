const { Book } = require('../models');

module.exports = {
    getAll: (req, res) => Book.findAll({
        include: ['authors', 'genres']
    }).then((data) => res.send(data)),
    get: (req, res) => Book.findByPk(Number(req.params.id), {
        include: ['authors', 'genres']
    }).then((data) => res.send(data))
};