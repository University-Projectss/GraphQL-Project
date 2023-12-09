const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

//this is what the mutation returns
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    quantity: {
      type: GraphQLInt,
    },
  },
});

module.exports = ProductType;
