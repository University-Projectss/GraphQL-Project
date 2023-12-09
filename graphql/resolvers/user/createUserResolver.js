const db = require("../../../models");

const createUserResolver = async (_, { user }) => {
  const { name, email, password } = user;
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
