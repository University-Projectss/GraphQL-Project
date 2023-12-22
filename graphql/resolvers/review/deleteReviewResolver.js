const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const deleteReviewResolver = async (_, args, context) => {
  const bigUser = context.req.raw.user;
  const { id } = args;

  checkValidUser(bigUser);

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
