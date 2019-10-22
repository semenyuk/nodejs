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
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete('Books', null, {}),
    queryInterface.bulkDelete('Authors', null, {}),
    queryInterface.bulkDelete('BookToAuthors', null, {}),
  ])
};
