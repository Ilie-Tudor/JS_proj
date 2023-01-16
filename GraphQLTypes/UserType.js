const { GraphQLObjectType, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This is an user of the application",
  fields: () => ({
    user_id: {
      type: GraphQLString
    },
    user_name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
      // resolve: () => "" //TODO this resolve is the final one, should be uncommented
    },
    display_name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    postal_code: {
      type: GraphQLString
    }
  })
});

module.exports.UserType = UserType;
