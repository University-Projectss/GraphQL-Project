const { GraphQLObjectType } = require("graphql");

const userQuery = require("./queries/user/user");
const usersQuery = require("./queries/user/users");
const productsQuery = require("./queries/product/products");
const productQuery = require("./queries/product/product");
const reviewsQuery = require("./queries/review/reviews");
const reviewQuery = require("./queries/review/review");
const orderQuery = require("./queries/order/order");
const ordersQuery = require("./queries/order/orders");
const basketQuery = require("./queries/basket/basket");
const basketsQuery = require("./queries/basket/baskets");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,

    product: productQuery,
    products: productsQuery,

    review: reviewQuery,
    reviews: reviewsQuery,

    order: orderQuery,
    orders: ordersQuery,

    basket: basketQuery,
    baskets: basketsQuery,
  },
});

module.exports = queryType;
