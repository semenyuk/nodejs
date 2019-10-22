const { Book } = require('../models');

module.exports = {
    getAll: (req, res) => Book.findAll({
        include: ['authors']
    }).then(res.send),
    get: (req, res) => Book.findByPk(Number(req.params.id), {
        include: ['authors']
    }).then(res.send)
};