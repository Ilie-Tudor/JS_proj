const { User } = require("../models");
const { UserType } = require("../GraphQLTypes/UserType");
const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  login: {
    type: GraphQLString,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const user = await User.findOne({
        where: {
          email: args.email,
          password: args.password,
        },
      });

      if (user) {
        // returnam un jwt
        const secret = process.env.secret;
        const payload = {
          user_id: User.user_id,
          type: "client_user",
        };

        const jwtToken = jwt.sign(payload, secret, { expiresIn: 3600 });

        return jwtToken;
      } else {
        return "Ai erori baiatu' meu.";
      }
    },
  },
};
