const { Product } = require("../models");
const { ProductType } = require("../GraphQLTypes/ProductType");
const {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLError,
  GraphQLInt
} = require("graphql");
const { ValidateToken, ValidateAuthorization } = require("../utils/auth");

module.exports = {
  getProductById: {
    type: ProductType,
    args: {
      product_id: { type: GraphQLString }
    },
    resolve: async (parent, args, context) =>
      await Product.findByPk(args.product_id)
  },

  getProductByProductName: {
    type: ProductType,
    args: {
      product_name: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const product = await Product.findOne({
        where: { product_name: args.product_name }
      });
      return product;
    }
  },

  getAllProducts: {
    type: new GraphQLList(ProductType),
    resolve: async (parent, args, context) => {
      const products = await Product.findAll();
      return products;
    }
  },

  addProduct: {
    type: GraphQLString,
    args: {
      product_name: { type: new GraphQLNonNull(GraphQLString) },
      product_description: { type: new GraphQLNonNull(GraphQLString) },
      specifications: { type: new GraphQLNonNull(GraphQLString) },
      price: { type: new GraphQLNonNull(GraphQLInt) },
      category_id: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const { error: authenticationError, userInfo } = ValidateToken(
        context.jwt
      );
      if (authenticationError)
        return new GraphQLError(
          "Unauthenticated\n" + JSON.stringify(authenticationError),
          { status: 401 }
        );

      const { isAuthorized } = ValidateAuthorization(
        context.jwt,
        "company_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;

      const product = await Product.create({
        product_name: args.product_name,
        product_description: args.product_description,
        specifications: args.specifications,
        price: args.price,
        category_id: args.category_id,
        company_id: user_id
      });
      return "Product added";
    }
  },
  deleteProductById: {
    type: GraphQLString,
    args: {
      product_id: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const { error: authenticationError, userInfo } = ValidateToken(
        context.jwt
      );
      if (authenticationError)
        return new GraphQLError(
          "Unauthenticated\n" + JSON.stringify(authenticationError),
          { status: 401 }
        );

      const { isAuthorized } = ValidateAuthorization(
        context.jwt,
        "company_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;

      try {
        const deleteProductCount = await Product.destroy({
          where: {
            product_id: args.product_id,
            company_id: user_id
          }
        });
        return `Deleted ${deleteProductCount} rows`;
      } catch (err) {
        return err;
      }
    }
  }
};
