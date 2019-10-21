'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    Author.belongsToMany(models.Book, {
      through: 'BookToAuthor',
      as: 'books',
      foreignKey: 'author_id',
      otherKey: 'book_id'
    })
  };
  return Author;
};