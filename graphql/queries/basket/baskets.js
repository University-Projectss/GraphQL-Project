const { GraphQLList } = require('graphql');
const db = require('../../../models');

const BasketType = require('../../types/basket/basketType');

const basketsQuery = {
    type: new GraphQLList(BasketType),
    resolve: () => db.Basket.findAll()
};

module.exports = basketsQuery;