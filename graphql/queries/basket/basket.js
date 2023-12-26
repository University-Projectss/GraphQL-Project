const db = require('../../../models');

const {GraphQLNonNull, GraphQLID} = require('graphql');
const BasketType = require('../../types/basket/basketType');

const basketQuery = {
    type: BasketType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, args) => {
        const { id } = args;
        return db.Basket.findByPk(id);
    }
};

module.exports = basketQuery;