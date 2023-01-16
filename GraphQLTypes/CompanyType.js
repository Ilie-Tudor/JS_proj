const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { Product } = require("../models");

module.exports.CompanyType = new GraphQLObjectType({
  name: "Company",
  description: "This is an company of the application",
  fields: () => ({
    company_id: {
      type: GraphQLString
    },
    company_name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
      // resolve: () => "" //TODO this resolve is the final one, should be uncommented
    },
    cui: {
      type: GraphQLString
    },
    company_token: {
      type: GraphQLString
      // resolve: () => "" //TODO this resolve is the final one, should be uncommented
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve: async (parent, args, context) => {
        return Product.findAll({ where: { company_id: parent.company_id } });
      }
    }
  })
});

const { ProductType } = require("./ProductType");
