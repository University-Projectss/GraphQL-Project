const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

//this is what the mutation returns
const OrderProductType = new GraphQLObjectType({
  name: "OrderProduct",
  fields: {
    orderId: {
        type: GraphQLID,
    },
    productId: {
        type: GraphQLID,
    },
    price: {
      type: GraphQLInt,
    },
    amount: {
      type: GraphQLInt,
    },

  },
});

module.exports = OrderProductType;
