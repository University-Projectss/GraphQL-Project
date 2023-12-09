const { GraphQLNonNull, GraphQLID } = require("graphql");
const UserType = require("../../types/user/userType");
const updateUserResolver = require("../../resolvers/user/updateUserResolver");
const userInputType = require("../../types/user/userInputType");

const updateUser = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: userInputType,
    },
  },
  resolve: updateUserResolver,
};

module.exports = updateUser;
