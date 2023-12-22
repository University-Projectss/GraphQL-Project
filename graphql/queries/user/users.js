const { GraphQLList } = require("graphql");

const db = require("../../../models");

const UserType = require("../../types/user/userType");
const { checkValidUser } = require("../../utils");

const usersQuery = {
  type: new GraphQLList(UserType),
  resolve: (_, args, context) => {
    const user = context.req.raw.user;

    //if the user is null, meaning the jwt token is missing or invalid
    //we must stop the request and execute order 66.
    checkValidUser(user);

    return db.User.findAll();
  },
};

module.exports = usersQuery;
