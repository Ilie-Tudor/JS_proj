const { Product } = require("../models");
const { ProductType } = require("../GraphQLTypes/ProductType");
const {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLError
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
  }

  //   createUser: {
  //     type: UserType,
  //     args: {
  //       user_name: { type: new GraphQLNonNull(GraphQLString) },
  //       email: { type: new GraphQLNonNull(GraphQLString) },
  //       password: { type: new GraphQLNonNull(GraphQLString) },
  //       display_name: { type: new GraphQLNonNull(GraphQLString) },
  //       address: { type: GraphQLString },
  //       postal_code: { type: GraphQLString }
  //     },
  //     resolve: async (parent, args, context) => {
  //       const newUser = await User.create({
  //         user_name: args.user_name,
  //         email: args.email,
  //         password: args.password,
  //         display_name: args.display_name,
  //         address: args.address,
  //         postal_code: args.postal_code
  //       });
  //       return newUser;
  //     }
  //   },

  //   updateUserById: {
  //     type: GraphQLString,
  //     args: {
  //       user_name: { type: GraphQLString },
  //       email: { type: GraphQLString },
  //       password: { type: GraphQLString },
  //       display_name: { type: GraphQLString },
  //       address: { type: GraphQLString },
  //       postal_code: { type: GraphQLString }
  //     },
  //     resolve: async (parent, args, context) => {
  //       const { error: authenticationError, userInfo } = ValidateToken(
  //         context.jwt
  //       );
  //       if (authenticationError)
  //         return new GraphQLError(
  //           "Unauthenticated\n" + JSON.stringify(authenticationError),
  //           { status: 401 }
  //         );

  //       const { isAuthorized } = ValidateAuthorization(
  //         context.jwt,
  //         "client_user"
  //       );
  //       if (!isAuthorized)
  //         return new GraphQLError("Unauthorized", { status: 403 });

  //       const { user_id } = userInfo;
  //       const updatedRowsCount = await User.update(
  //         {
  //           user_id: user_id,
  //           user_name: args.user_name,
  //           email: args.email,
  //           password: args.password,
  //           display_name: args.display_name,
  //           address: args.address,
  //           postal_code: args.postal_code
  //         },
  //         {
  //           where: {
  //             user_id: user_id
  //           },
  //           returing: true
  //         }
  //       );
  //       return `Updated ${updatedRowsCount} rows`;
  //     }
  //   },

  //   deleteUserById: {
  //     type: GraphQLString,
  //     resolve: async (parent, args, context) => {
  //       const { error: authenticationError, userInfo } = ValidateToken(
  //         context.jwt
  //       );
  //       if (authenticationError)
  //         return new GraphQLError(
  //           "Unauthenticated\n" + JSON.stringify(authenticationError),
  //           { status: 401 }
  //         );

  //       const { isAuthorized } = ValidateAuthorization(
  //         context.jwt,
  //         "client_user"
  //       );
  //       if (!isAuthorized)
  //         return new GraphQLError("Unauthorized", { status: 403 });

  //       const { user_id } = userInfo;
  //       try {
  //         const deletedRowsCount = await User.destroy({
  //           where: {
  //             user_id: user_id
  //           }
  //         });
  //         return `Deleted ${deletedRowsCount} rows`;
  //       } catch (err) {
  //         return err;
  //       }
  //     }
  //   }
};
