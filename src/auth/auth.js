const { User } = require('../models');
const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const config = require('./config.js');

const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {
    const strategy = new Strategy(params, function(payload, done) {
        User.findByPk(payload.id)
            .then((user) => done(null, {
                id: user.id
            }))
            .catch((e) => done(new Error('User not found'), null));

    });

    passport.use(strategy);

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate('jwt', config.jwtSession);
        }
    };
};