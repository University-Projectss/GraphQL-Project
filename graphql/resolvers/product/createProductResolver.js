const db = require("../../../models");

const createProductResolver = async (_, { product }) => {
  const { name, description, price, quantity } = product;
  const newProduct = await db.Product.create({
    name,
    description,
    price,
    quantity,
  });

  return newProduct;
};

module.exports = createProductResolver;
