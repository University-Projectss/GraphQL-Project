const db = require("../../../models");

const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const ReviewType = require("../../types/review/reviewType");

const reviewQuery = {
  type: ReviewType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args) => {
    const { id } = args;
    return db.review.findByPk(id);
  },
};

module.exports = reviewQuery;
