const db = require("../../../models");

const loginResolver = async (_, args, context) => {
  console.log(_);
  console.log(args);
  console.log(context);

  const { email, password } = args;

  const user = await db.User.findOne({
    where: {
      email,
      password,
    },
  });

  if (user) {
    return {
      token: `1234567890:${user.id}`,
    };
  }

  return {
    token: null,
  };
};

module.exports = loginResolver;
