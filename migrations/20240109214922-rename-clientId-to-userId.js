'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Baskets', 'clientId', 'userId');
    await queryInterface.renameColumn('Reviews', 'clientId', 'userId');

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Baskets', 'userId', 'clientId');
    await queryInterface.renameColumn('Reviews', 'userId', 'clientId');
  }
};
