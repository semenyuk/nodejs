'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookToAuthor = sequelize.define('BookToAuthor', {
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  BookToAuthor.associate = function(models) {
    // associations can be defined here
  };
  return BookToAuthor;
};