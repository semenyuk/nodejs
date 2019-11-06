'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users', 'password', {
        type: DataTypes.STRING,
        allowNull: false,
      })
      .then(() => queryInterface.addColumn('Users', 'email', {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }))
      .then(() => queryInterface.addColumn('Users', 'salt', Sequelize.STRING)),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Users', 'password')
      .then(() => queryInterface.removeColumn('Users', 'email'))
      .then(() => queryInterface.removeColumn('Users', 'salt'))
};
