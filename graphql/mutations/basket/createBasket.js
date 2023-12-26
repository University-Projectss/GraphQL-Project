const createBasketResolver = require('../../resolvers/basket/createBasketResolver.js');
const BasketType = require('../../types/basket/basketType');
const { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } = require("graphql");

const createBasket = {
    type: BasketType,
    args: {
        id: { type: GraphQLID },
        clientId: { type: GraphQLID },
        products: { type: new GraphQLList(GraphQLID) },
        productsName: { type: new GraphQLList(GraphQLString) },
        productsQuantity: { type: new GraphQLList(GraphQLInt) },
        productsPrice: { type: new GraphQLList(GraphQLInt) },
        voucher: { type: GraphQLString },
        price: { type: GraphQLInt },
    },
    resolve: createBasketResolver
};

module.exports = createBasket;
