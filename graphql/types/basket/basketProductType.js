const {
    GraphQLID,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

const BasketProductType = new GraphQLObjectType({
    name: 'BasketProduct',
    fields: {
        basketId: { type: GraphQLID },
        productId: { type: GraphQLID },
        productName: { type: GraphQLString },
        price: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
    }
});

module.exports = BasketProductType;