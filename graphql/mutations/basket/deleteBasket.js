const { GraphQLNonNull, GraphQLBoolean, GraphQLID } = require('graphql');
const deleteBasketResolver = require('../../resolvers/basket/deleteBasketResolver.js');

const deleteBasket = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },

  resolve: deleteBasketResolver,
};

module.exports = deleteBasket;