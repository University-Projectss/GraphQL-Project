const { GraphQLList } = require("graphql");
const db = require("../../../models");

const ProductType = require("../../types/product/productType");

const productsQuery = {
  type: new GraphQLList(ProductType),
  resolve: () => {
    return db.Product.findAll();
  },
};

module.exports = productsQuery;
