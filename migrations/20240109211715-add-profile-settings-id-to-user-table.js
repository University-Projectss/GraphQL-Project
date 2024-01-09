'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'profileSettingsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'ProfileSettings',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'profileSettingsId');
  }
};
