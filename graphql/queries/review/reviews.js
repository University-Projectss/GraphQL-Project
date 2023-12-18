const { GraphQLList } = require("graphql");
const db = require("../../../models");

const ReviewType = require("../../types/review/reviewType");

const reviewsQuery = {
  type: new GraphQLList(ReviewType),
  resolve: () => {
    return db.Review.findAll();
  },
};

module.exports = reviewsQuery;
