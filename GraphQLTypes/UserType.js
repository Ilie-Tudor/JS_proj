const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { Product, User } = require("../models");
module.exports.UserType = new GraphQLObjectType({
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
    },
    cart_products: {
      type: new GraphQLList(ProductType),
      resolve: async (parent, args, context) => {
        const users = await User.findOne({
          include: { model: Product, as: "cart" },
          where: { user_id: parent.user_id }
        });
        return users.cart;
      }
    },
    favorite_products: {
      type: new GraphQLList(ProductType),
      resolve: async (parent, args, context) => {
        const users = await User.findOne({
          include: { model: Product, as: "favorite" },
          where: { user_id: parent.user_id }
        });
        return users.favorite;
      }
    }
  })
});

const { ProductType } = require("./ProductType");
