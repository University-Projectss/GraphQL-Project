'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     const products = [{
      name: 'apa 2L',
      price: 10,
      description: 'sticla de apa 2L',
      quantity: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'breloc cu deschizator de sticle',
      price: 5,
      description: 'nu te lasa la nevoie',
      quantity: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'curs nodejs',
      price: 100,
      description: 'este in format fizic',
      quantity: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
    
    await queryInterface.bulkInsert('Products', products, {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
