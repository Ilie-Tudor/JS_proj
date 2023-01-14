const { User } = require("../models");
const { UserType } = require("../GraphQLTypes/UserType");
const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");

module.exports = {
  getUserById: {
    type: UserType,
    args: {
      user_id: { type: GraphQLString },
    },
    resolve: async (parent, args) => await User.findByPk(args.user_id),
  },

  getUserByName: {
    type: UserType,
    args: {
      user_name: { type: GraphQLString },
    },
    resolve: async (parent, args) =>
      await User.findOne({ where: { user_name: args.user_name } }),
  },

  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve: async () => await User.findAll(),
  },

  createUser: {
    type: UserType,
    args: {
      user_name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      display_name: { type: new GraphQLNonNull(GraphQLString) },
      address: { type: GraphQLString },
      postal_code: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const newUser = await User.create({
        user_name: args.user_name,
        email: args.email,
        password: args.password,
        display_name: args.display_name,
        address: args.address,
        postal_code: args.postal_code,
      });
      return newUser;
    },
  },

  updateUserById: {
    type: GraphQLString,
    args: {
      user_id: { type: new GraphQLNonNull(GraphQLString) },
      user_name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      display_name: { type: GraphQLString },
      address: { type: GraphQLString },
      postal_code: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const updatedRowsCount = await User.update(
        {
          user_name: args.user_name,
          email: args.email,
          password: args.password,
          display_name: args.display_name,
          address: args.address,
          postal_code: args.postal_code,
        },
        {
          where: {
            user_id: args.user_id,
          },
          returing: true,
        }
      );
      return `Updated ${updatedRowsCount} rows`;
    },
  },

  deleteUserById: {
    type: GraphQLString,
    args: {
      user_id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
      try {
        const deletedRowsCount = await User.destroy({
          where: {
            user_id: args.user_id,
          },
        });
        return `Deleted ${deletedRowsCount} rows`;
      } catch (err) {
        return err;
      }
    },
  },
};
