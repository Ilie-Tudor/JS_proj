const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { Product, User, Review } = require("../models");
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
    },
    user_reviews: {
      type: new GraphQLList(ReviewType),
      resolve: async (parent, args, context) => {
        const user = await User.findOne({
          where: { user_id: parent.user_id },
          include: { model: Review, include: [Product, User] }
        });
        return user.Reviews;
      }
    }
  })
});

const { ProductType } = require("./ProductType");
const { ReviewType } = require("./ReviewType");
