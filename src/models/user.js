const crypto = require('crypto')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.salt = crypto.randomBytes(16).toString('base64');
        user.password = User.encryptPassword(user.salt, user.password)
      }
    }
  });

  User.encryptPassword = function (password, salt) {
    return  crypto
        .createHash('RSA-SHA256')
        .update(password)
        .update(salt)
        .digest('hex')
  };

  User.associate = function(models) {
    User.hasMany(models.Rating, {
      as: 'ratings',
      foreignKey: 'user_id',
    })
  };
  return User;
};