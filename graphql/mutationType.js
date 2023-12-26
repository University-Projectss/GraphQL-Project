const { GraphQLObjectType } = require("graphql");

const createUser = require("./mutations/user/createUser");
const updateUser = require("./mutations/user/updateUser");
const deleteUser = require("./mutations/user/deleteUser");
const login = require("./mutations/user/login");
const createProduct = require("./mutations/product/createProduct");
const createReview = require("./mutations/review/createReview");
const deleteReview = require("./mutations/review/deleteReview");
const createOrder = require("./mutations/order/createOrder.js");
const createBasket = require("./mutations/basket/createBasket.js");
const deleteBasket = require("./mutations/basket/deleteBasket");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    login: login,

    createProduct: createProduct,

    createReview: createReview,
    deleteReview: deleteReview,

    createOrder: createOrder,

    createBasket: createBasket,
    deleteBasket: deleteBasket,
  },
});

module.exports = mutationType;
