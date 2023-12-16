const db = require("../../../models");

const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const ProductType = require("../../types/product/productType");

const productQuery = {
  type: ProductType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args) => {
    const { id } = args;
    return db.Product.findByPk(id);
  },
};

module.exports = productQuery;
