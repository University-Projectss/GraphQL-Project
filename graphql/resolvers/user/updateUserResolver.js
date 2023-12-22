const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const updateUserResolver = async (_, args, context) => {
  const { id, user } = args;
  const bigUser = context.req.raw.user;

  checkValidUser(bigUser);

  const targetUser = await db.User.findByPk(id);

  if (!targetUser) {
    return null;
  }

  const updatedUser = await targetUser.update({
    ...user,
  });

  return updatedUser;
};

module.exports = updateUserResolver;
