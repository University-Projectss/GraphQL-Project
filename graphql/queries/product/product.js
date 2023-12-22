const db = require("../../../models");

const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const ProductType = require("../../types/product/productType");
const { checkValidUser } = require("../../utils");

const productQuery = {
  type: ProductType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args, context) => {
    const user = context.req.raw.user;
    const { id } = args;
    checkValidUser(user);

    return db.Product.findByPk(id);
  },
};

module.exports = productQuery;
