const { Book } = require('../models');

module.exports = {
    getAll: (req, res) => Book.findAll({
        include: ['authors', 'genres', 'ratings']
    }).then((data) => res.send(data)),
    get: (req, res) => Book.findByPk(Number(req.params.id), {
        include: ['authors', 'genres', 'ratings']
    }).then((data) => res.send(data)),
    getByAuthor: (req, res) => Book.findAll({
        include: ['authors', 'genres', 'ratings'],
        where: {
            '$authors.id$': Number(req.params.id),
        }
    }).then((data) => res.send(data)),
    getByRating: (req, res) => Book.findAll({
        include: ['authors', 'genres', 'ratings'],
        where: {
            '$ratings.rating$': Number(req.params.rating),
        }
    }).then((data) => res.send(data)),
    create: (req, res) => {
        Book.create({ name: req.body.name })
            .then((newBook) => res.send(newBook))
    }
};