const { GraphQLObjectType } = require("graphql");

const createUser = require("./mutations/user/createUser");
const updateUser = require("./mutations/user/updateUser");
const deleteUser = require("./mutations/user/deleteUser");
const login = require("./mutations/user/login");
const createProduct = require("./mutations/product/createProduct");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    login: login,

    createProduct: createProduct,
  },
});

module.exports = mutationType;
