const checkValidUser = (user) => {
  if (user === null) {
    throw new Error("Unauthorized");
  }
};

module.exports = { checkValidUser };
