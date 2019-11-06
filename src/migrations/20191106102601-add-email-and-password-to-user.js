'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users', 'password', Sequelize.STRING)
      .then(() => queryInterface.addColumn('Users', 'email', Sequelize.STRING))
      .then(() => queryInterface.addColumn('Users', 'salt', Sequelize.STRING)),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Users', 'password')
      .then(() => queryInterface.removeColumn('Users', 'email'))
      .then(() => queryInterface.removeColumn('Users', 'salt'))
};
