const { GraphQLList } = require("graphql");
const db = require("../../../models");

const ProductType = require("../../types/product/productType");
const { checkValidUser } = require("../../utils");

const productsQuery = {
  type: new GraphQLList(ProductType),
  resolve: (_, args, context) => {
    const user = context.req.raw.user;
    checkValidUser(user);

    return db.Product.findAll();
  },
};

module.exports = productsQuery;
