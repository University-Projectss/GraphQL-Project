const createProductResolver = require("../../resolvers/product/createProductResolver");
const productInputType = require("../../types/product/productInputType");
const ProductType = require("../../types/product/productType");

const createProduct = {
  type: ProductType,
  args: {
    product: {
      type: productInputType,
    },
  },
  resolve: createProductResolver,
};

module.exports = createProduct;
