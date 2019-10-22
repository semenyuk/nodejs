'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    Genre.belongsToMany(models.Book, {
      through: 'BookToGenre',
      as: 'books',
      foreignKey: 'genre_id',
      otherKey: 'book_id'
    })
  };
  return Genre;
};