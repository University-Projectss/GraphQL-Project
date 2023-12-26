const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLFloat,
} = require('graphql');

const BasketType = new GraphQLObjectType({
    name: 'Basket',
    fields: {
        id: { type: GraphQLID },
        clientId: { type: GraphQLID },
        voucher: { type: GraphQLString },
        price: { type: GraphQLFloat },
    }
});

module.exports = BasketType;