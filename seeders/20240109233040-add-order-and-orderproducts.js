'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersQuery = await queryInterface.sequelize.query('SELECT id from Users;');
    const users = usersQuery[0];
    const productsQuery = await queryInterface.sequelize.query('SELECT id, price from Products;');
    const products = productsQuery[0];

    let orderId = null;
    for(let user of users) {
      const orderProducts = [];
      const productsCount = Math.floor(Math.random() * 4) + 1;
      let totalPrice = 0;
      for(let i = 0; i < productsCount; i++) {
        const product = products[Math.floor(Math.random() * products.length)];
        orderProducts.push({
          productId: product.id,
          orderId: orderId,
          quantity: Math.floor(Math.random() * 4) + 1,
          price: product.price,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        totalPrice += product.price * orderProducts[i].quantity;
      }

      const order = {
        userId: user.id,
        price: totalPrice,
        date: new Date(),
        status: Math.random() < 0.5 ? 'pending' : 'completed',
        address: `Address ${user.id}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await queryInterface.bulkInsert('Orders', [order], {});

      if(orderId === null) {  // first iteration only, necessary because autoIncrement might assign a value that is not 0
        const orderQuery = await queryInterface.sequelize.query('SELECT id from Orders;');
        const orders = orderQuery[0];
        orderId = orders.length > 0 ? orders[orders.length - 1].id : 0;
        for(const element of orderProducts) {
          element.orderId = orderId;
        }
      }
      await queryInterface.bulkInsert('OrderProducts', orderProducts, {});

      orderId++;

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
