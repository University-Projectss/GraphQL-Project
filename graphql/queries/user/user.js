const db = require("../../../models");

const { GraphQLNonNull, GraphQLID } = require("graphql");

const UserType = require("../../types/user/userType");
const { checkValidUser } = require("../../utils");

const userQuery = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, args, context) => {
    const user = context.req.raw.user;
    const { id } = args;

    checkValidUser(user);

    return db.User.findByPk(id);
  },
};

module.exports = userQuery;
