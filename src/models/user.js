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

        user.encryptPassword()
      }
    }
  });

  User.prototype.encryptPassword = function () {
    this.password = crypto
        .createHash('RSA-SHA256')
        .update(this.password)
        .update(this.salt)
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