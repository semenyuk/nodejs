'use strict';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Books', [
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

  down: (queryInterface) => queryInterface.bulkDelete('Books', null, {})
};
