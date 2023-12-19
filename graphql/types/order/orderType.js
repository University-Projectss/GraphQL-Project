const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

//this is what the mutation returns
const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: {
    id: {
      type: GraphQLID,
    },
    clientId: {
        type: GraphQLID,
    },
    date: {
        type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    status: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },


  },
});

module.exports = OrderType;
