const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const createOrderResolver = async (_, order, context) => {
  const bigUser = context.req.raw.user;
  const {
    id,
    clientId,
    date,
    products,
    productsQuantity,
    productsPrice,
    address,
    status,
  } = order;
  checkValidUser(bigUser);

  const productTypeCount = products.length;
  for (let i = 0; i < productTypeCount; i++) {
    console.log(
      "i",
      i,
      "products[i]",
      products[i],
      "productsQuantity[i]",
      productsQuantity[i],
      "productsPrice[i]",
      productsPrice[i]
    );
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
