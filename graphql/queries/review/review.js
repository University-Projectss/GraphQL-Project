const db = require("../../../models");

const { GraphQLNonNull, GraphQLID } = require("graphql");
const ReviewType = require("../../types/review/reviewType");
const { checkValidUser } = require("../../utils");

const reviewQuery = {
  type: ReviewType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args, context) => {
    const user = context.req.raw.user;
    const { id } = args;

    checkValidUser(user);

    return db.Review.findByPk(id);
  },
};

module.exports = reviewQuery;
