const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require("graphql");

//this is what the mutation returns
const ReviewType = new GraphQLObjectType({
  name: "Review",
  fields: {
    id: {
      type: GraphQLID,
    },
    productId: {
      type: GraphQLID,
    },
    userId: {
      type: GraphQLID,
    },
    rating: {
      type: GraphQLInt,
    },
    description: {
      type: GraphQLString,
    },
  },
});

module.exports = ReviewType;
