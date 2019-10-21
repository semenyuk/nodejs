'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    Book.belongsToMany(models.Author, {
      through: 'BookToAuthor',
      as: 'authors',
      foreignKey: 'book_id',
      otherKey: 'author_id'
    })
  };
  return Book;
};