const { User } = require('../models');
const auth = require('../auth/auth');

module.exports = {
    create: (req, res) => {
        User.create(req.body)
            .then((user) => res.send(user))
    },
    login: (req, res) => {
        const { email, password } = req.body;

        return User.findOne({
                where: {
                    email,
                }
            })
            .then((user) => {
                if (!user || !user.isValidPassword(password)) {
                    return res.sendStatus(401)
                }

                const token = auth.generateToken({ id: user.id });

                res.cookie('access_token', token).send(token)
            })
    }
};