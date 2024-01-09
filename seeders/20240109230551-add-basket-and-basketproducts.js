'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersQuery = await queryInterface.sequelize.query('SELECT id FROM Users'); // 
    const users = usersQuery[0];
    const productsQuery = await queryInterface.sequelize.query('SELECT id, price FROM Products');
    const products = productsQuery[0];
    for(let user of users) {
      const basketProducts = [];
      const productsCount = Math.floor(Math.random() * 4) + 1;
      let totalPrice = 0;
      for(let i = 0; i < productsCount; i++) {
        const product = products[Math.floor(Math.random() * products.length)];
        basketProducts.push({
          productId: product.id,
          basketId: user.id,
          quantity: Math.floor(Math.random() * 4) + 1,
          price: product.price,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        totalPrice += product.price * basketProducts[i].quantity;
      }
      await queryInterface.bulkInsert('BasketProducts', basketProducts, {});
      const basket = {
        userId: user.id,
        price: totalPrice,
        voucher: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await queryInterface.bulkInsert('Baskets', [basket], {});

    }
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
