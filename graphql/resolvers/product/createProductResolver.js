const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const createProductResolver = async (_, { product }, context) => {
  const bigUser = context.req.raw.user;
  const { name, description, price, quantity } = product;
  checkValidUser(bigUser);

  const newProduct = await db.Product.create({
    name,
    description,
    price,
    quantity,
  });

  return newProduct;
};

module.exports = createProductResolver;
