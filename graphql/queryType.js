const { GraphQLObjectType } = require("graphql");

const userQuery = require("./queries/user/user");
const usersQuery = require("./queries/user/users");
const productsQuery = require("./queries/product/products");
const productQuery = require("./queries/product/product");
const reviewsQuery = require("./queries/review/reviews");
const reviewQuery = require("./queries/review/review");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,

    product: productQuery,
    products: productsQuery,

    review: reviewQuery,
    reviews: reviewsQuery,
  },
});

module.exports = queryType;
