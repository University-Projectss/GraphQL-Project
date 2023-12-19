const db = require("../../../models");

const { GraphQLNonNull, GraphQLID} = require("graphql");
const OrderType = require("../../types/order/orderType");

const orderQuery = {
  type: OrderType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args) => {
    const { id } = args;
    return db.Order.findByPk(id);
  },
};

module.exports = orderQuery;
