const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const deleteUserResolver = async (_, args, context) => {
  const bigUser = context.req.raw.user;
  const { id } = args;

  checkValidUser(bigUser);

  const targetUser = await db.User.findByPk(id);

  if (!targetUser) {
    return null;
  }

  try {
    await targetUser.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserResolver;
