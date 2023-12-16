const { GraphQLObjectType } = require("graphql");

const userQuery = require("./queries/user/user");
const usersQuery = require("./queries/user/users");
const productsQuery = require("./queries/product/products");
const productQuery = require("./queries/product/product");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,

    product: productQuery,
    products: productsQuery,
  },
});

module.exports = queryType;
