const { User } = require('../models');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { Strategy } = require('passport-jwt');
const config = require('./config.js');

const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: function(req) {
        if (req && req.cookies)
        {
            return req.cookies['access_token'];
        }

        return null;
    }
};

const strategy = new Strategy(params, function(payload, done) {
    User.findByPk(payload.id)
        .then((user) => done(null, {
            id: user.id
        }))
        .catch((e) => done(new Error('User not found'), null));

});

passport.use(strategy);

module.exports = {
    initialize: function() {
        return passport.initialize();
    },
    authenticate: function() {
        return passport.authenticate('jwt', config.jwtSession);
    },
    generateToken: function (payload) {
        return jwt.sign(payload, config.jwtSecret)
    }
};