const { GraphQLList } = require("graphql");
const db = require("../../../models");

const OrderType = require("../../types/order/orderType");

const ordersQuery = {
  type: new GraphQLList(OrderType),
  resolve: () => {
    return db.Order.findAll();
  },
};

module.exports = ordersQuery;
