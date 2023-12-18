const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require("graphql");

const deleteReviewResolver = require("../../resolvers/review/deleteReviewResolver");

const deleteReview = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteReviewResolver,
};

module.exports = deleteReview;
