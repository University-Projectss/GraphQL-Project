const { GraphQLList } = require("graphql");
const db = require("../../../models");

const ReviewType = require("../../types/review/reviewType");
const { checkValidUser } = require("../../utils");

const reviewsQuery = {
  type: new GraphQLList(ReviewType),
  resolve: (_, args, context) => {
    const user = context.req.raw.user;

    checkValidUser(user);

    return db.Review.findAll();
  },
};

module.exports = reviewsQuery;
