'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersQuery = await queryInterface.sequelize.query(
      `SELECT id from Users;`
    );
    const users = usersQuery[0];
    const productsQuery = await queryInterface.sequelize.query('SELECT id from Products;');
    const products = productsQuery[0];
    const data = users.map(user => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      return {
        userId: user.id,
        productId: randomProduct.id,
        rating: Math.floor(Math.random() * 5) + 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et libero euismod, blandit libero vitae, lacinia quam. Nulla facilisi. Sed euismod, nisl nec aliquet commodo, est tortor luctus nunc, vel ultricies velit neque id nunc. Sed vitae massa vitae leo rutrum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Suspendisse potenti. Sed id nisl eget nisi aliquam ultricies. Nullam euismod, nisi sed sagittis ultricies, nunc velit aliquet magna, sed lacinia nisl nulla quis nunc. Nulla facilisi. Donec euismod, nisl nec aliquet commodo, est tortor luctus nunc, vel ultricies velit neque id nunc. Sed vitae massa vitae leo rutrum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Suspendisse potenti. Sed id nisl eget nisi aliquam ultricies.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }; 
    });

    await queryInterface.bulkInsert('Reviews', data, {});
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
