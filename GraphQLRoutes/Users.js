const { User, Favorite, Review, Cart } = require("../models");
const { UserType } = require("../GraphQLTypes/UserType");
const {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLError,
  GraphQLInt
} = require("graphql");
const { ValidateToken, ValidateAuthorization } = require("../utils/auth");

module.exports = {
  getUserById: {
    type: UserType,
    args: {
      user_id: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => await User.findByPk(args.user_id)
  },

  getUserByUserName: {
    type: UserType,
    args: {
      user_name: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const user = await User.findOne({ where: { user_name: args.user_name } });
      return user.toJSON();
    }
  },

  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve: async (parent, args, context) => {
      const users = await User.findAll();
      return users;
    }
  },

  createUser: {
    type: UserType,
    args: {
      user_name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      display_name: { type: new GraphQLNonNull(GraphQLString) },
      address: { type: GraphQLString },
      postal_code: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
      const newUser = await User.create({
        user_name: args.user_name,
        email: args.email,
        password: args.password,
        display_name: args.display_name,
        address: args.address,
        postal_code: args.postal_code
      });
      return newUser;
    }
  },

  updateUserById: {
    type: GraphQLString,
    args: {
      user_name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      display_name: { type: GraphQLString },
      address: { type: GraphQLString },
      postal_code: { type: GraphQLString }
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
        "client_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;
      const updatedRowsCount = await User.update(
        {
          user_id: user_id,
          user_name: args.user_name,
          email: args.email,
          password: args.password,
          display_name: args.display_name,
          address: args.address,
          postal_code: args.postal_code
        },
        {
          where: {
            user_id: user_id
          },
          returing: true
        }
      );
      return `Updated ${updatedRowsCount} rows`;
    }
  },

  deleteUserById: {
    type: GraphQLString,
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
        "client_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;
      try {
        const deletedRowsCount = await User.destroy({
          where: {
            user_id: user_id
          }
        });
        return `Deleted ${deletedRowsCount} rows`;
      } catch (err) {
        return err;
      }
    }
  },

  addProductToFavoritesById: {
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
        "client_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });

      const { user_id } = userInfo;

      try {
        const [, created] = await Favorite.findOrCreate({
          where: {
            user_id: user_id,
            product_id: args.product_id
          }
        });
        return created
          ? `Added the product to favorites`
          : `The product exist in favorites allready`;
      } catch (err) {
        return err;
      }
    }
  },

  reviewProductById: {
    type: GraphQLString,
    args: {
      product_id: { type: GraphQLString },
      rating: { type: GraphQLInt },
      review_summary: { type: GraphQLString },
      content: { type: GraphQLString }
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
        "client_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });
      const { user_id } = userInfo;

      try {
        const [, created] = await Review.findOrCreate({
          where: {
            user_id: user_id,
            product_id: args.product_id
          },
          defaults: {
            rating: args.rating,
            review_summary: args.review_summary,
            content: args.content
          }
        });
        return created
          ? `Added the review`
          : `The product is allready reviewed`;
      } catch (err) {
        return err;
      }
    }
  },

  addProductToCartById: {
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
        "client_user"
      );
      if (!isAuthorized)
        return new GraphQLError("Unauthorized", { status: 403 });
      const { user_id } = userInfo;

      try {
        const [, created] = await Cart.findOrCreate({
          where: {
            user_id: user_id,
            product_id: args.product_id
          }
        });
        return created ? `Added to cart` : `Allready in cart`;
      } catch (err) {
        return err;
      }
    }
  }
};
