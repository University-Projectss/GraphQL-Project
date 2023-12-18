const db = require("../../../models");

const deleteReviewResolver = async (_, args) => {
  const { id } = args;

  const targetReview = await db.Review.findByPk(id);

  if (!targetReview) {
    return null;
  }

  try {
    await targetReview.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteReviewResolver;
