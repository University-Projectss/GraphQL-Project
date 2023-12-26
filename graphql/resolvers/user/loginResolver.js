const db = require("../../../models");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../../config");
const { checkValidUser } = require("../../utils");

const loginResolver = async (_, args, context) => {
  const bigUser = context.req.raw.user;
  const { email, password } = args;

  //checkValidUser(bigUser);

  const user = await db.User.findOne({
    where: {
      email,
      password,
    },
  });

  if (user) {
    return {
      token: jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        secretKey,
        { expiresIn: "7d" }
      ),
    };
  }

  return {
    token: null,
  };
};

module.exports = loginResolver;
