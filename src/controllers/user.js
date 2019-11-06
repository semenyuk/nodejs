const { User } = require('../models');

module.exports = {
    create: (req, res) => {
        User.create(req.body)
            .then((user) => res.send(user))
    },
};