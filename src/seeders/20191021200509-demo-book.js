'use strict';

module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.bulkInsert('Books', [
      {
        name: 'Book1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    queryInterface.bulkInsert('Authors', [
      {
        name: 'Author1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Author2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Author3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    queryInterface.bulkInsert('BookToAuthors', [
      {
        book_id: 1,
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 2,
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 3,
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    queryInterface.bulkInsert('Genres', [
      {
        name: 'Genre1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Genre2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Genre3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    queryInterface.bulkInsert('BookToGenres', [
      {
        book_id: 1,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 2,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 3,
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    queryInterface.bulkInsert('Users', [
      {
        name: "User1",
        email: "qwe1@mail.com",
        password: "password1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "User2",
        email: "qwe2@mail.com",
        password: "password2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "User3",
        email: "qwe3@mail.com",
        password: "password3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    queryInterface.bulkInsert('Ratings', [
      {
        book_id: 1,
        user_id: 1,
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 2,
        user_id: 2,
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 3,
        user_id: 3,
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete('Books', null, {}),
    queryInterface.bulkDelete('Authors', null, {}),
    queryInterface.bulkDelete('Genres', null, {}),
    queryInterface.bulkDelete('BookToAuthors', null, {}),
    queryInterface.bulkDelete('BookToGenres', null, {}),
    queryInterface.bulkDelete('Users', null, {}),
    queryInterface.bulkDelete('Ratings', null, {}),
  ])
};
