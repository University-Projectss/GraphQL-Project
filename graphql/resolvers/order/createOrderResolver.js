const db = require("../../../models");

const createOrderResolver = async (_, order ) => {
  console.log('order', order);
  const { id, clientId, date, products, productsQuantity, productsPrice, address, status } = order;

  const productTypeCount = products.length;
    for(let i = 0; i < productTypeCount; i++) {
        console.log('i', i, 'products[i]', products[i], 'productsQuantity[i]', productsQuantity[i], 'productsPrice[i]', productsPrice[i])
        await db.OrderProduct.create({
            orderId: id,
            productId: products[i],
            quantity: productsQuantity[i],
            price: productsPrice[i],
        });
    }

  const price = productsPrice.reduce((a, b) => a + b, 0);

  const newOrder = await db.Order.create({
    id,
    clientId,
    date,
    price,
    address,
    status,
  });

  return newOrder;
};

module.exports = createOrderResolver;
