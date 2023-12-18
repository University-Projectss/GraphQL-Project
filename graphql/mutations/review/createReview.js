const createReviewResolver = require("../../resolvers/review/createReviewResolver");
const reviewInputType = require("../../types/review/reviewInputType");
const reviewType = require("../../types/review/reviewType");

const createReview = {
  type: reviewType,
  args: {
    review: {
      type: reviewInputType,
    },
  },
  resolve: createReviewResolver,
};

module.exports = createReview;
