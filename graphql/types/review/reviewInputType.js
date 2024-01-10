const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

//this is what mutation takes as param
const ReviewInputType = new GraphQLInputObjectType({
  name: "ReviewInputType",
  fields: {
    productId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    rating: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = ReviewInputType;
