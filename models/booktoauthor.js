'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookToAuthor = sequelize.define('BookToAuthor', {
    book_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  BookToAuthor.associate = function(models) {
    BookToAuthor.belongsTo(models.Book, {
      foreignKey: 'book_id',
      as: 'book'
    });
    BookToAuthor.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author'
    });
  };
  return BookToAuthor;
};