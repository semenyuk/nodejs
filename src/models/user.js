'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Rating, {
      as: 'ratings',
      foreignKey: 'user_id',
    })
  };
  return User;
};