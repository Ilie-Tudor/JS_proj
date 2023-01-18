const { Product_Category } = require("../models");
const { ProductCategoryType } = require("../GraphQLTypes/ProductCategoryType");
const { GraphQLString, GraphQLList } = require("graphql");

module.exports = {
  getCategoryById: {
    type: ProductCategoryType,
    args: {
      category_id: { type: GraphQLString }
    },
    resolve: async (parent, args, context) =>
      await Product_Category.findByPk(args.category_id)
  },

  getCategoryByCategoryName: {
    type: ProductCategoryType,
    args: {
      category_name: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const category = await Product_Category.findOne({
        where: { category_name: args.category_name }
      });
      return category;
    }
  },

  getAllCategories: {
    type: new GraphQLList(ProductCategoryType),
    resolve: async (parent, args, context) => {
      const categories = await Product_Category.findAll();
      return categories;
    }
  }
};
