const createOrderResolver = require("../../resolvers/order/createOrderResolver");
const OrderType = require("../../types/order/orderType");
const { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } = require("graphql");

const createOrder = {
  type: OrderType,
  args: {
    id: {
      type: GraphQLID,
    },
    clientId: {
      type: GraphQLID,
    },
    date: {
      type: GraphQLString,
    },
    products: {
        type: new GraphQLList(GraphQLID),
    },
    productsQuantity: {
        type: new GraphQLList(GraphQLInt),
    },
    productsPrice: {
        type: new GraphQLList(GraphQLInt),
    },
    address: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
  },
  resolve: createOrderResolver,
};

module.exports = createOrder;
