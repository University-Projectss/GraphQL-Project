const { GraphQLList } = require("graphql");
const db = require("../../../models");

const OrderType = require("../../types/order/orderType");
const { checkValidUser } = require("../../utils");

const ordersQuery = {
  type: new GraphQLList(OrderType),
  resolve: (_, args, context) => {
    const user = context.req.raw.user;
    checkValidUser(user);

    return db.Order.findAll();
  },
};

module.exports = ordersQuery;
