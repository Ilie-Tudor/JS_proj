const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
module.exports.ReviewType = new GraphQLObjectType({
  name: "Review",
  description: "This is a review of the application",
  fields: () => ({
    user_id: {
      type: GraphQLString
    },
    product_id: {
      type: GraphQLString
    },
    rating: {
      type: GraphQLInt
    },
    review_summary: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    product: {
      type: ProductType,
      resolve: (parent) => parent.Product
    },
    user: {
      type: UserType,
      resolve: (parent) => parent.User
    }
  })
});

const { ProductType } = require("./ProductType");
const { UserType } = require("./UserType");
