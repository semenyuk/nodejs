'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookToGenre = sequelize.define('BookToGenre', {
    book_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER,
  }, {});
  BookToGenre.associate = function(models) {
    BookToGenre.belongsTo(models.Book, {
      foreignKey: 'book_id',
      as: 'book'
    });
    BookToGenre.belongsTo(models.Genre, {
      foreignKey: 'genre_id',
      as: 'genre'
    });
  };
  return BookToGenre;
};