const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { Product } = require("../models");

module.exports.ProductCategoryType = new GraphQLObjectType({
  name: "Product_Category",
  description: "This is a Product_Category of the application",
  fields: () => ({
    category_id: {
      type: GraphQLString
    },
    category_name: {
      type: GraphQLString
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: async (parent, args, context) => {
        return Product.findAll({ where: { category_id: parent.category_id } });
      }
    }
  })
});
const { ProductType } = require("./ProductType");
