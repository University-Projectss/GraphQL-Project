const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

//this is what the mutation returns
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  },
});

module.exports = UserType;
