const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
const { Product_Category, Company } = require("../models");

module.exports.ProductType = new GraphQLObjectType({
  name: "Product",
  description: "This is a product of the application",
  fields: () => ({
    product_id: {
      type: GraphQLString
    },
    company_id: {
      type: GraphQLString
    },
    product_name: {
      type: GraphQLString
    },
    product_description: {
      type: GraphQLString
    },
    specifications: {
      type: GraphQLString
      // resolve: () => "" //TODO this resolve is the final one, should be uncommented
    },
    price: {
      type: GraphQLInt
    },
    category_id: {
      type: GraphQLString
      // resolve: () => "" //TODO this resolve is the final one, should be uncommented
    },
    category: {
      type: ProductCategoryType,
      resolve: async (parent, args, context) => {
        return await Product_Category.findOne({
          where: { category_id: parent.category_id }
        });
      }
    },
    company: {
      type: CompanyType,
      resolve: async (parent, args, context) => {
        return await Company.findOne({
          where: { company_id: parent.company_id }
        });
      }
    }
  })
});
const { ProductCategoryType } = require("./ProductCategoryType");
const { CompanyType } = require("./CompanyType");
