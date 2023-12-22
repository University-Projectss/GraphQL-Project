const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const createReviewResolver = async (_, { review }, context) => {
  const bigUser = context.req.raw.user;
  const { productId, clientId, rating, description } = review;
  checkValidUser(bigUser);

  try {
    const newReview = await db.Review.create({
      productId,
      clientId,
      rating,
      description,
    });

    return newReview;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = createReviewResolver;
