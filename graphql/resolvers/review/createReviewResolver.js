const db = require("../../../models");

const createReviewResolver = async (_, { review }) => {
  const { productId, clientId, rating, description } = review;
  try {
    const newReview = await db.Review.create({
      productId, 
      clientId, 
      rating, 
      description
    });

    return newReview;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = createReviewResolver;
