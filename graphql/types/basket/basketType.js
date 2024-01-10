const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLFloat,
} = require('graphql');

const ProductType = require('../product/productType');

const BasketType = new GraphQLObjectType({
    name: 'Basket',
    fields: {
        id: { type: GraphQLID },
        userId: { type: GraphQLID },
        voucher: { type: GraphQLString },
        price: { type: GraphQLFloat },
        products: { 
            type: new GraphQLList(ProductType) ,
            resolve: async (basket) => {
                const products = await basket.getProducts();
                return products;
            }
        },
    }
});

module.exports = BasketType;