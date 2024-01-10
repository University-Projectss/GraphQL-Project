const db = require("../../../models");
const { checkValidUser } = require("../../utils");

const createUserResolver = async (_, { user }, context) => {
  const bigUser = context.req.raw.user;
  const { name, email, password } = user;
  // checkValidUser(bigUser);

  try {
    const newUser = await db.User.create({
      name,
      email,
      password,
    });

    return newUser;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = createUserResolver;
