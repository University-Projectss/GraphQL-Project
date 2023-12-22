const db = require("../../../models");

const { GraphQLNonNull, GraphQLID } = require("graphql");
const OrderType = require("../../types/order/orderType");
const { checkValidUser } = require("../../utils");

const orderQuery = {
  type: OrderType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args, context) => {
    const user = context.req.raw.user;
    const { id } = args;
    checkValidUser(user);

    return db.Order.findByPk(id);
  },
};

module.exports = orderQuery;
